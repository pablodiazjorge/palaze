import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})
export class PlzButton {
  @Prop() variant?: string = 'default';
  @Prop() size?: string = 'default';
  @Prop() color?: string = 'default';
  @Prop() corners?: string = 'default';
  @Prop() shadowColor?: string = '';
  @Prop() icon?: string = '';
  @Prop() active: boolean = false;
  @Prop() text: string = '';

  render() {
    return this.variant == 'default' ? (
      <Host>
        <button class={this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'pop-shadow' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'icon' ? (
      <Host>
        <button class={this.variant + ' ' + this.variant + '-' + this.size + '-size '}>
          <img class={this.variant + '-' + this.size + '-size'} src={'./assets/icon/Icon-' + `${this.icon}` + '.svg'} alt={`${this.icon}`} />
        </button>
      </Host>
    ) : this.variant == 'progress' && this.active == true ? (
      <Host>
        <button
          class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}
          innerHTML="<div class='playa'><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div></div>"
        ></button>
      </Host>
    ) : this.variant == 'progress' && this.active == false ? (
      <Host>
        <button
          class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border pop-shadow-' + this.shadowColor}
          innerHTML={this.text}
        ></button>
      </Host>
    ) : null;
  }
}
