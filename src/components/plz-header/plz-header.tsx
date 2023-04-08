import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-header',
  styleUrl: 'plz-header.css',
  shadow: true,
})
export class PlzHeader {
  @Prop() variant: string = 'right-hover';
  @Prop() color: string = 'white';
  @Prop() colorText = 'black';
  @Prop() colorHover: string = '';
  @Prop() colorTextHover: string= '';

  render() {
    return this.variant == 'right-hover' ? (
      <Host>
        <header class="header" style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`, '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}`}}>
          <nav class="left">
            <slot name="left"></slot>
          </nav>
          <nav class="right">
            <slot name="right-select"></slot>
          </nav>
        </header>
      </Host>
    ) : this.variant == 'left-hover' ? (
      <Host>
        <header class="header" style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`, '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}`}}>
          <nav class="left-select">
            <slot name="left-select"></slot>
          </nav>
          <nav class="right">
            <slot name="right"></slot>
          </nav>
        </header>
      </Host>
    ) : this.variant == 'both-hover' ? (
      <Host>
        <header class="header" style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`, '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}`}}>
          <nav class="left-select">
            <slot name="left-select"></slot>
          </nav>
          <nav class="right-select">
            <slot name="right-select"></slot>
          </nav>
        </header>
      </Host>
    ) : null;
  }
}
