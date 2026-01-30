import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-dropdown-menu',
  styleUrl: 'plz-dropdown-menu.css',
  shadow: true,
})
export class PlzDropdownMenu {
  @Element() el: HTMLElement;
  @Prop() variant: 'simple' | 'custom' = 'simple';
  @Prop({ mutable: true, reflect: true }) active: boolean = false;
  @Prop() link?: string;
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self';
  @Prop() colorHover: string = '';
  @Prop() colorText: string = 'white';
  @Prop() static: boolean = false;
  @Prop() spa: boolean = false;

  @Event() plzNavigate: EventEmitter<string>;

  changeActive() {
    if (!this.static) {
      this.active = !this.active;
    }
  }

  expand() {
    this.active = true;
    this.el.dispatchEvent(
      new CustomEvent('plzDropdownExpanded', {
        bubbles: true,
        composed: true,
        detail: this.link,
      }),
    );
  }

  collapse() {
    if (!this.static) {
      this.active = false;
    }
    this.el.dispatchEvent(
      new CustomEvent('plzDropdownCollapsed', {
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
      if (!this.static) {
        this.changeActive();
      }
    });
  }

  render() {
    switch (this.variant) {
      case 'simple':
        return this.link != '' && this.static ? (
          <Host>
            <li>
              <a href={this.link} target={this.target} class={{ simple: true, item: true }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: true }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.link != '' ? (
          <Host>
            <li>
              <a href={this.link} target={this.target} class={{ simple: true, item: true, selected: this.active }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.static ? (
          <Host>
            <li>
              <a class={{ simple: true, item: true }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: true }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : (
          <Host>
            <li>
              <a class={{ simple: true, item: true, selected: this.active }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        );
      case 'custom':
        return this.link != '' && this.static ? (
          <Host>
            <li>
              <a
                href={this.link}
                target={this.target}
                class={{ custom: true, item: true }}
                style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              >
                <slot></slot>
              </a>
              <ul class={{ dropdown: true }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.link != '' ? (
          <Host>
            <li>
              <a
                href={this.link}
                target={this.target}
                class={{ custom: true, item: true, active: this.active }}
                style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              >
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.static ? (
          <Host>
            <li>
              <a class={{ custom: true, item: true }} style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: true }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : (
          <Host>
            <li>
              <a class={{ custom: true, item: true, active: this.active }} style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        );
      default:
        return null;
    }
  }
}
