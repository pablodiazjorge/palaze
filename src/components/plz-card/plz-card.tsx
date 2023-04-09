import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card',
  styleUrl: 'plz-card.css',
  shadow: true,
})
export class PlzCard {
  @Prop() variant: string = 'default';
  @Prop() url: string = '';
  @Prop() target: string = '_self';
  @Prop() image: string = '';
  @Prop() hover: string = 'blue';
  @Prop() width: string = '220';

  render() {
    return this.variant == 'default' ? (
      <a class={`a-${this.variant + ' ' + 'glow-' + this.hover}`} href={this.url} target={this.target}>
        <div class={`image-container-${this.variant}`} style={{ 'background-image': `url(${this.image})`, 'width': `${this.width}px` }}></div>
        <div class={`text-container-${this.variant}`} style={{ width: `${this.width}px` }}>
          <slot></slot>
        </div>
      </a>
    ) : this.variant == 'simple' ? (
      <div class={`card-${this.variant}`}>
        <slot></slot>
      </div>
    ) : this.variant == 'header' ? (
      <Host>
        <div class={`card-${this.variant} header-top`}>
          <slot name="header-content"></slot>
        </div>
        <div class={`card-${this.variant} header-bottom`}>
          <slot name="content"></slot>
        </div>
      </Host>
    ) : this.variant == 'footer' ? (
      <Host>
        <div class={`card-${this.variant} footer-top`}>
          <slot name="content"></slot>
        </div>
        <div class={`card-${this.variant} footer-bottom`}>
          <slot name="footer-content"></slot>
        </div>
      </Host>
    ) : this.variant == 'image' ? (
      <div class={`container-${this.variant}`} style={{ 'background-image': `url(${this.image})` }}>
        <slot></slot>
      </div>
    ) : null;
  }
}
