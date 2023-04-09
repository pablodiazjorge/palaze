import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-dropdown-menu',
  styleUrl: 'plz-dropdown-menu.css',
  shadow: true,
})
export class PlzDropdownMenu {
  @Prop() variant: string = 'simple';
  @Prop() active: boolean = false;
  @Prop() link: string = '';
  @Prop() colorHover: string = '';
  @Prop() colorText: string = 'white';

  changeActive() {
    this.active = !this.active;
  }

  render() {
    return this.variant == 'simple' && this.link != '' ? (
      <Host>
        <li>
          <a href={this.link} class={{ simple: true, item: true, selected: this.active }} onClick={() => this.changeActive()}>
            <slot></slot>
            <slot></slot>
          </a>
          <ul class={{ dropdown: this.active }}>
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'simple' ? (
      <Host>
        <li>
          <a class={{ simple: true, item: true, selected: this.active }} onClick={() => this.changeActive()}>
            <slot></slot>
          </a>
          <ul id="#sub-menu" class={{ dropdown: this.active }}>
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'custom' && this.link != '' ? (
      <Host>
        <li>
          <a
            href={this.link}
            class={{ custom: true, item: true, active: this.active }}
            style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            onClick={() => this.changeActive()}
          >
            <slot></slot>
          </a>
          <ul id="#sub-menu" class={{ dropdown: this.active }}>
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'custom' ? (
      <Host>
        <li>
          <a
            class={{ custom: true, item: true, active: this.active }}
            style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            onClick={() => this.changeActive()}
          >
            <slot></slot>
          </a>
          <ul id="#sub-menu" class={{ dropdown: this.active }}>
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : null;
  }
}
