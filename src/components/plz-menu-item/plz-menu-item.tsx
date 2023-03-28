import { Component, h, Host, Prop, State } from '@stencil/core';

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

  @State() private isActive: boolean = false;
  private menuItemRef: HTMLElement;


  private handleClick() {
    const prevActive = document.querySelector('.item.active');
    if (prevActive) {
      prevActive.classList.remove('active');
    }
    this.menuItemRef.classList.add('active');
  }

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <a href={this.link} target={this.target} class="link simple">
          <li class="item">
            <slot></slot>
          </li>
        </a>
      </Host>
    ) : this.variant == 'custom' && this.colorHover != '' && this.link != '' ? (
      <Host>
        <a href={this.link} target={this.target} class="link custom" style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
          <li class="item">
            <slot></slot>
          </li>
        </a>
      </Host>
    ) : this.variant == 'custom' && this.colorHover != '' ? (
      <Host>
        <li class="item custom" style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'custom' ? (
      <Host>
        <li class={{ item: true, active: this.isActive }} ref={el => (this.menuItemRef = el)} onClick={() => this.handleClick()}>
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'home' ? (
      <Host>
        <li class={`item-${this.variant} grid-container`}>
          <div class="grid-item">
            <img src="./assets/icon/Icon-home-p.svg" alt="github" />
          </div>
          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'message' ? (
      <Host>
        <li class={`item-${this.variant} grid-container`}>
          <div class="grid-item">
            <img src="./assets/icon/Icon-message-p.svg" alt="github" />
          </div>

          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'settings' ? (
      <Host>
        <li class={`item-${this.variant} grid-container`}>
          <div class="grid-item">
            <img src="./assets/icon/Icon-settings-p.svg" alt="github" />
          </div>

          <slot></slot>
        </li>
      </Host>
    ) : this.variant == 'user' ? (
      <Host>
        <li class={`item-${this.variant} grid-container`}>
          <div class="grid-item">
            <img src="./assets/icon/Icon-user-p.svg" alt="github" />
          </div>
          <slot></slot>
        </li>
      </Host>
    ) : null;
  }
}
