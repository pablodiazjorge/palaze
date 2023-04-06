import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-showcase-render',
  styleUrl: 'plz-showcase-render.css',
  shadow: true,
})
export class PlzShowcaseRender {
  @Prop() display: string = 'inline-flex';
  @Prop() height: string = '';
  @Prop() paddingTop: string = '10';
  @Prop() paddingBottom: string = '10';
  @Prop() paddingRight: string = '10';
  @Prop() paddingLeft: string = '10';
  @Prop() verticalAlign: string = 'center';
  @Prop() gap: string = '10';

  render() {
    return this.height != '' ? (
      <Host>
        <div
          class={this.display}
          style={{
            height: `${this.height}px`,
            paddingTop: `${this.paddingTop}px`,
            paddingBottom: `${this.paddingBottom}px`,
            paddingLeft: `${this.paddingLeft}px`,
            paddingRight: `${this.paddingRight}px`,
            alignItems: `${this.verticalAlign}`,
            gap: `${this.gap}px`,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    ) : (
      <Host>
        <div
          class={this.display}
          style={{ paddingTop: `${this.paddingTop}px`, paddingBottom: `${this.paddingBottom}px`, paddingLeft: `${this.paddingLeft}px`, paddingRight: `${this.paddingRight}px`, alignItems: `${this.verticalAlign}`, gap: `${this.gap}px` }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
