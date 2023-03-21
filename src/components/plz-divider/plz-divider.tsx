import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'plz-divider',
  styleUrl: 'plz-divider.css',
  shadow: true,
})
export class PlzDivider {
  @Prop() type: string = 'solid';
  @Prop() variant: string = 'default';
  @Prop() color: string = '#d4d4d8';
  @Prop() height: string = '1';
  @Prop() spaceTop: string = '0';
  @Prop() spaceBottom: string = '0';
  @Prop() customDivider: string = '';
  @Prop() customPosition: string = 'top left';

  render() {
    return this.variant == 'default' ? (
      <Host style={{ 'margin-top': `${this.spaceTop}px`, 'margin-bottom': `${this.spaceBottom}px` }}>
        <hr class="stroke" style={{ border: `${this.height}px ${this.type} ${this.color}` }} />
      </Host>
    ) : this.variant == 'custom' ? (
      <Host style={{ 'margin-top': `${this.spaceTop}px`, 'margin-bottom': `${this.spaceBottom}px` }}>
        <div class="custom" style={{ 'background-image': `url(${this.customDivider})`, 'height': `${this.height}px`, 'backgroundPosition':`${this.customPosition}` }}></div>
      </Host>
    ) : null;
  }
}
