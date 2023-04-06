import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() text: string;
  @Prop() variant: 'simple';
  @Prop() link: string;
  @Prop() position: string = 'top';

  openLink() {
    window.open(this.link);
  }

  render() {
    return this.variant == 'simple' ? (
      <div class="container tooltip" data-tool={this.text}>
        <slot></slot>
      </div>
    ) : this.variant == 'link' ? (
      <div class="container">
        <slot></slot>
        <div class={`tooltip-link ${this.position}`}>
          <a href={this.link}>{this.text}</a>
        </div>
      </div>
    ) : null;
  }
}
