import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-section',
  styleUrl: 'plz-section.css',
  shadow: true,
})
export class PlzSection {
  @Prop() variant: string = 'wrapper';

  render() {
    return this.variant == 'wrapper' ? (
        <div class="wrapper">
          <slot></slot>
        </div>
    ) : this.variant == 'columns' ? (
      <Host>
        <div class="columns">
          <div class="column-content">
            <slot name="first"></slot>
          </div>
          <div class="column-content">
            <slot name="second"></slot>
          </div>
        </div>
      </Host>
    ) : null;
  }
}
