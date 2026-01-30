import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {
  @Element() el: HTMLElement;
  @Prop() variant?: 'simple' | 'custom' | 'image' = 'simple';
  @Prop() link?: string;
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self';
  @Prop() colorHover?: string = '';
  @Prop() colorText?: string = 'white';
  @Prop() imageUrl?: string = '';
  @Prop() submenu: boolean = false;
  @Prop({ mutable: true, reflect: true }) active: boolean = false;
  @Prop() spa: boolean = false;

  @Event() plzNavigate: EventEmitter<string>;

  activate() {
    this.active = true;
    this.el.setAttribute('aria-current', 'page');
    console.log('Item activated:', this.link, 'aria-current set:', this.el.getAttribute('aria-current'));
    this.el.dispatchEvent(
      new CustomEvent('plzMenuItemActivated', {
        bubbles: true,
        composed: true,
        detail: this.link,
      }),
    );
  }

  deactivate() {
    this.active = false;
    this.el.removeAttribute('aria-current');
    console.log('Item deactivated:', this.link);
    this.el.dispatchEvent(
      new CustomEvent('plzMenuItemDeactivated', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  componentDidLoad() {
    this.el.addEventListener('click', (e: Event) => {
      if (this.spa && this.link) {
        e.preventDefault();
        e.stopPropagation();
        this.plzNavigate.emit(this.link);
      }
      if (!this.submenu) {
        this.activate();
      }
    });
  }

  render() {
    const getActiveStyle = () => {
      if (!this.active) return {};
      return {
        'background-color': 'var(--bg-color-hover)',
        'color': 'var(--bg-color-text)',
        'font-weight': '700',
        'border-top-right-radius': '25px',
        'border-bottom-right-radius': '25px',
      };
    };

    switch (this.variant) {
      case 'simple':
        return this.colorHover != '' ? (
          <Host>
            <a
              href={this.link}
              target={this.target}
              class="link simple-custom"
              style={{
                '--bg-color-hover': `${this.colorHover}`,
                '--bg-color-text': `${this.colorText}`,
                ...getActiveStyle(),
              }}
            >
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : (
          <Host>
            <a href={this.link} target={this.target} class="link simple" style={getActiveStyle()}>
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        );
      case 'custom':
        return this.colorHover != '' && this.link != '' ? (
          <Host>
            <a
              href={this.link}
              target={this.target}
              class="link custom"
              style={{
                '--bg-color-hover': `${this.colorHover}`,
                '--bg-color-text': `${this.colorText}`,
                ...getActiveStyle(),
              }}
            >
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : this.colorHover != '' ? (
          <Host>
            <li
              class="item custom"
              style={{
                '--bg-color-hover': `${this.colorHover}`,
                '--bg-color-text': `${this.colorText}`,
                ...getActiveStyle(),
              }}
            >
              <slot></slot>
            </li>
          </Host>
        ) : (
          <Host>
            <li class="item" style={getActiveStyle()}>
              <slot></slot>
            </li>
          </Host>
        );
      case 'image':
        return this.colorHover && this.link != '' ? (
          <Host>
            <a
              href={this.link}
              target={this.target}
              class="link custom"
              style={{
                '--bg-color-hover': `${this.colorHover}`,
                '--bg-color-text': `${this.colorText}`,
                ...getActiveStyle(),
              }}
            >
              <li class={`item-image grid-container ${this.active ? 'active' : ''} ${this.submenu ? 'submenu' : ''}`}>
                <div class="grid-item">
                  <img src={this.imageUrl} />
                </div>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : this.colorHover != '' ? (
          <Host>
            <li
              class={`item-image grid-container ${this.submenu ? 'submenu' : ''}`}
              style={{
                '--bg-color-hover': `${this.colorHover}`,
                '--bg-color-text': `${this.colorText}`,
                ...getActiveStyle(),
              }}
            >
              <div class="grid-item">
                <img src={this.imageUrl} />
              </div>
              <slot></slot>
            </li>
          </Host>
        ) : (
          <Host>
            <li class={`item-image grid-container item-image-hover ${this.active ? 'active' : ''} ${this.submenu ? 'submenu' : ''}`} style={getActiveStyle()}>
              <div class="grid-item">
                <img src={this.imageUrl} />
              </div>
              <slot></slot>
            </li>
          </Host>
        );
      default:
        return null;
    }
  }
}
