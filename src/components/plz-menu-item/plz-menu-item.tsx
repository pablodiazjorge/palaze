import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {
  @Prop() variant: string = 'simple';
  @Prop() link: string = '';
  @Prop() target: string = '_self';
  @Prop() colorHover: string = '';
  @Prop() colorText: string = 'white';
  @Prop() imageUrl: string = '';

  @Prop() active: boolean = false;

  activate() {
    this.active = !this.active;
  }

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <a href={this.link} target={this.target} class={`link simple ${this.active ? 'active-simple' : ''}`} onClick={() => this.activate()}>
          <li class="item">
            <slot></slot>
          </li>
        </a>
      </Host>
    ) : this.variant == 'custom' && this.colorHover != '' && this.link != '' ? (
      <Host>
        <a
          href={this.link}
          target={this.target}
          class={`link custom ${this.active ? 'active' : ''}`}
          onClick={() => this.activate()}
          style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
        >
          <li class="item">
            <slot></slot>
          </li>
        </a>
      </Host>
    ) : this.variant == 'custom' && this.colorHover != '' ? (
      <Host>
        <li
          class={`item custom ${this.active ? 'active' : ''}`}
          onClick={() => this.activate()}
          style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
        >
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'custom' ? (
      <Host>
        <li class={{ item: true, active: this.active }} onClick={() => this.activate()}>
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'image' && this.colorHover && this.link != '' ? (
      <Host>
        <a
          href={this.link}
          target={this.target}
          class="link custom"
          style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
          onClick={() => this.activate()}
        >
          <li class={`item-image grid-container ${this.active ? 'active' : ''}`} onClick={() => this.activate()}>
            <div class="grid-item">
              <img src={this.imageUrl} />
            </div>
            <slot></slot>
          </li>
        </a>
      </Host>
    ) : this.variant == 'image' && this.colorHover ? (
      <Host>
        <li
          class={`item-image grid-container ${this.active ? 'active' : ''}`}
          onClick={() => this.activate()}
          style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
        >
          <div class="grid-item">
            <img src={this.imageUrl} />
          </div>
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'image' ? (
      <Host>
        <li class={`item-image grid-container item-image-hover ${this.active ? 'active' : ''}`} onClick={() => this.activate()}>
          <div class="grid-item">
            <img src={this.imageUrl} />
          </div>
          <slot></slot>
        </li>
      </Host>
    ) : null;
  }
}
