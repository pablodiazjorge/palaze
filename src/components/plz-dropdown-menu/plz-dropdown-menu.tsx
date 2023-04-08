import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-dropdown-menu',
  styleUrl: 'plz-dropdown-menu.css',
  shadow: true,
})
export class PlzDropdownMenu {
  @Prop() variant: string = 'simple';
  @Prop() active: boolean = false;
  @Prop() link: string;

  changeActive() {
    this.active = !this.active;
  }

  render() {
    return this.variant == 'simple' && this.link != '' ? (
      <Host>
        <li class={{active: this.active, link: true, simple: true}} onClick={() => this.changeActive()}>
          <a href={this.link}>
            <slot></slot>
          </a>
          <ul id="#sub-menu">
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'simple' ? (
      <Host>
        <li class={{active: this.active, simple: true}} onClick={() => this.changeActive()}>
          <slot></slot>
          <ul id="#sub-menu">
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'custom' && this.link != '' ? (
      <Host>
        <li class={{active: this.active, link: true, custom: true}} onClick={() => this.changeActive()}>
          <a href={this.link}>
            <slot></slot>
          </a>
          <ul id="#sub-menu">
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : this.variant == 'custom' ? (
      <Host>
        <li class={{active: this.active, custom: true}} onClick={() => this.changeActive()}>
          <slot></slot>
          <ul id="#sub-menu">
            <slot name="dropdown"></slot>
          </ul>
        </li>
      </Host>
    ) : null;
  }
}
