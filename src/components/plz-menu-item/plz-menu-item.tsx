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
  @Prop({ mutable: true }) active: boolean = false;
  @Prop() spa: boolean = false;

  @Event() plzNavigate: EventEmitter<string>;

  private handleClick(e: Event) {
    if (this.spa && this.link) {
      e.preventDefault();
      this.plzNavigate.emit(this.link);
    }
    this.activate();
  }

  activate() {
    this.active = !this.active;
  }

  render() {
    switch (this.variant) {
      case 'simple':
        return this.colorHover != '' ? (
          <Host>
            <a
              href={this.link}
              target={this.target}
              class="link simple-custom"
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              onClick={e => this.handleClick(e)}
            >
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : (
          <Host>
            <a href={this.link} target={this.target} class={`link simple ${this.active ? 'active-simple' : ''}`} onClick={e => this.handleClick(e)}>
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
              class={`link custom ${this.active ? 'active' : ''}`}
              onClick={e => this.handleClick(e)}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : this.colorHover != '' ? (
          <Host>
            <li
              class={`item custom ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}
              onClick={() => this.activate()}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <slot></slot>
            </li>
          </Host>
        ) : (
          <Host>
            <li class={{ item: true, active: this.active, submenu: this.submenu }} onClick={() => this.activate()}>
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
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              onClick={e => this.handleClick(e)}
            >
              <li class={`item-image grid-container ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}>
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
              class={`item-image grid-container ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}
              onClick={() => this.activate()}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <div class="grid-item">
                <img src={this.imageUrl} />
              </div>
              <slot></slot>
            </li>
          </Host>
        ) : (
          <Host>
            <li class={`item-image grid-container item-image-hover ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}>
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
