import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-footer',
  styleUrl: 'plz-footer.css',
  shadow: true,
})
export class PlzFooter {
  @Prop() variant: string = '';
  @Prop() image: string;
  @Prop() height: string;

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <div class="simple">
          <slot></slot>
        </div>
      </Host>
    ) :this.variant == 'two-column' ? (
      <Host>
        <div class="hero-columns" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
          <div class="hero-columns-container">
            <div class="hero-columns-content">
              <slot name="first-column"></slot>
            </div>
            <div class="hero-columns-content">
              <slot name="second-column"></slot>
            </div>
          </div>
        </div>
      </Host>
    ) : null;
  }
}
