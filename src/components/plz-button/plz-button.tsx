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
  @Prop() link: string = '';
  @Prop() target: string = '_self';
  @Prop() hoverColor: string = '';
  @Prop() colorProgress: string = 'white';

  render() {
    return this.variant == 'default' && this.link != '' && this.hoverColor != '' ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button class={'hover-color ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} style={{'--bg-color-hover':`${this.hoverColor}`}}>
            <slot></slot>
          </button>
        </a>
      </Host>
    ) : this.variant == 'shadow' && this.link != '' && this.hoverColor != '' ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button class={'hover-color ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} style={{'--bg-color-hover':`${this.hoverColor}`}}>
            <slot></slot>
          </button>
        </a>
      </Host>
    ) : this.variant == 'default' && this.link != '' ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button class={this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor}>
            <slot></slot>
          </button>
        </a>
      </Host>
    ) : this.variant == 'shadow' && this.link != '' ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button class={this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor}>
            <slot></slot>
          </button>
        </a>
      </Host>
    ) : this.variant == 'icon' && this.link != '' ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button class={this.variant + ' ' + this.variant + '-' + this.size + '-size '}>
            <img class={this.variant + '-' + this.size + '-size'} src={'./assets/icon/Icon-' + `${this.icon}` + '.svg'} alt={`${this.icon}`} />
          </button>
        </a>
      </Host>
    ) : this.variant == 'default' && this.hoverColor != '' ? (
      <Host>
        <button class={'hover-color ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} style={{'--bg-color-hover':`${this.hoverColor}`}}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'shadow' && this.hoverColor != '' ? (
      <Host>
        <button class={'hover-color ' + this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} style={{'--bg-color-hover':`${this.hoverColor}`}}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'default' ? (
      <Host>
        <button class={this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor}>
          <slot></slot>
        </button>
      </Host>
    ) : this.variant == 'shadow' ? (
      <Host>
        <button class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor}>
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
          class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} style={{'--wave-color':`${this.colorProgress}`}}
          innerHTML="<div class='playa'><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div><div class='wave'></div></div>"
        ></button>
      </Host>
    ) : this.variant == 'progress' && this.active == false ? (
      <Host>
        <button class={this.variant + ' ' + this.color + ' ' + this.size + '-size ' + this.corners + '-border shadow-' + this.shadowColor} innerHTML={this.text}></button>
      </Host>
    ) : null;
  }
}
