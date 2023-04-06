import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() text: string;
  @Prop() variant: 'text' | 'link';
  @Prop() link: string;
  @Prop() position: string = 'top';
  @Prop() target: string = '_self'

  render() {
    return this.variant == 'text' && (this.position == 'top' || this.position == 'bottom') ? (
      <div class={`container tooltip ${this.position}`} data-tool={this.text}>
        <slot></slot>
      </div>
    ) : this.variant == 'text' && (this.position == 'left' || this.position == 'right') ? (
      <div class="container">
        <slot></slot>
        <span class={`tooltip-link-horizontal no-select ${this.position}`}>
          {this.text}
        </span>
      </div>
    ) : this.variant == 'link' && (this.position == 'top' || this.position == 'bottom')  ? (
      <div class="container">
        <slot></slot>
        <div class={`tooltip-link-vertical ${this.position}`}>
          <a href={this.link} target={this.target}>{this.text}</a>
        </div>
      </div>
    ) : this.variant == 'link' && (this.position == 'left' || this.position == 'right') ? (
      <div class="container">
        <slot></slot>
        <div class={`tooltip-link-horizontal ${this.position}`}>
          <a href={this.link} target={this.target}>{this.text}</a>
        </div>
      </div>
    ) : null;
  }
}
