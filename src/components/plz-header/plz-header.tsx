import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-header',
  styleUrl: 'plz-header.css',
  shadow: true,
})
export class PlzHeader {
  @Prop() variant?: 'right-hover' | 'left-hover' | 'both-hover' = 'right-hover'; //Variantes del componente
  @Prop() color: string = 'white'; //Color de fondo del componente
  @Prop() colorText = 'black'; //Color del texto de dentro del componente
  @Prop() colorHover?: string = ''; //Color del hover dependiendo de la variante elegida
  @Prop() colorTextHover?: string = ''; //Color del texto cuando hay hover de la variante elegida

  render() {
    switch (this.variant) {
      case 'right-hover':
        /**
         * Variante right-hover.
         * En esta variante la sección derecha del <nav> tendrá la opción hover.
         * Dependiendo de las dimensiones del dispositivo, el componente ajustará los espacios entre elementos.
         * Responsive
         */
        return (
          <Host>
            <header
              class="header"
              style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`,
              '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}` }}
            >
              <nav class="left">
                <slot name="left"></slot>
              </nav>
              <nav class="right">
                <slot name="right-select"></slot>
              </nav>
            </header>
          </Host>
        );
      case 'left-hover':
        /**
         * Variante right-hover.
         * En esta variante la sección izquierda del <nav> tendrá la opción hover.
         * Dependiendo de las dimensiones del dispositivo, el componente ajustará los espacios entre elementos.
         * Responsive
         */
        return (
          <Host>
            <header
              class="header"
              style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`,
              '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}` }}
            >
              <nav class="left-select">
                <slot name="left-select"></slot>
              </nav>
              <nav class="right">
                <slot name="right"></slot>
              </nav>
            </header>
          </Host>
        );
      case 'both-hover':
        /**
         * Variante right-hover.
         * En esta variante todo el <nav> tendrá la opción hover.
         * Dependiendo de las dimensiones del dispositivo, el componente ajustará los espacios entre elementos.
         * Responsive
         */
        return (
          <Host>
            <header
              class="header"
              style={{ '--color': `${this.color}`, '--color-text': `${this.colorText}`,
              '--color-hover': `${this.colorHover}`, '--color-text-hover': `${this.colorTextHover}` }}
            >
              <nav class="left-select">
                <slot name="left-select"></slot>
              </nav>
              <nav class="right-select">
                <slot name="right-select"></slot>
              </nav>
            </header>
          </Host>
        );
      default:
        null;
    }
  }
}
