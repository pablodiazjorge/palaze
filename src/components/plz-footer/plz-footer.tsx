import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-footer',
  styleUrl: 'plz-footer.css',
  shadow: true,
})
export class PlzFooter {
  @Prop() variant: string = 'simple';
  @Prop() image: string;
  @Prop() height: string = 'auto';

  render() {
    return this.variant == 'simple' ? (
      <Host>
        <footer>
          <div class="simple">
            <slot></slot>
          </div>
        </footer>
      </Host>
    ) : this.variant == 'block' ? (
      <Host>
        <footer>
          <div class="block" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
            <div class="block-content">
              <slot></slot>
            </div>
          </div>
        </footer>
      </Host>
    ) : this.variant == 'two-column' ? (
      <Host>
        <footer>
          <div class="footer-columns" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
            <div class="footer-columns-container">
              <div class="footer-columns-content">
                <slot name="first-column"></slot>
              </div>
              <div class="footer-columns-content">
                <slot name="second-column"></slot>
              </div>
            </div>
          </div>
        </footer>
      </Host>
    ) : null;
  }
}
