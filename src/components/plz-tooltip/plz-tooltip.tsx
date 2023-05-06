import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-tooltip',
  styleUrl: 'plz-tooltip.css',
  shadow: true,
})
export class PlzTooltip {
  @Prop() text: string; // Texto del tooltip
  @Prop() variant: 'text' | 'link'; //Tipos de variantes
  @Prop() link: string; //Url mediante a la que se accederá al enlace
  @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top'; //Posiciones del tooltip
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self'; //Forma de acceder a la url

  render() {
    switch (this.variant) {
      case 'text':
        /* Variante de solo texto. Caso para posición top y bottom */
        return this.position == 'top' || this.position == 'bottom' ? (
          <div class={`container tooltip ${this.position}`} data-tool={this.text}>
            <slot></slot>
          </div>
        ) : this.position == 'left' || this.position == 'right' ? (
          /* Variante de solo texto. Caso para posición right y left */
          <div class="container">
            <slot></slot>
            <span class={`tooltip-link-horizontal no-select ${this.position}`}>{this.text}</span>
          </div>
        ) : null;
      case 'link':
        /* Variante con link. Caso para posición top y bottom */
        return this.position == 'top' || this.position == 'bottom' ? (
          <div class="container">
            <slot></slot>
            <div class={`tooltip-link-vertical ${this.position}`}>
              <a href={this.link} target={this.target}>
                {this.text}
              </a>
            </div>
          </div>
        ) : this.position == 'left' || this.position == 'right' ? (
          /* Variante con link. Caso para posición left y right */
          <div class="container">
            <slot></slot>
            <div class={`tooltip-link-horizontal ${this.position}`}>
              <a href={this.link} target={this.target}>
                {this.text}
              </a>
            </div>
          </div>
        ) : null;
      default:
        null;
    }
  }
}
