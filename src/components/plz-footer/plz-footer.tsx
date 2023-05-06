import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-footer',
  styleUrl: 'plz-footer.css',
  shadow: true,
})
export class PlzFooter {
  @Prop() variant?: 'simple' | 'block' | 'two-column' = 'simple'; //Variantes del componente
  @Prop() image?: string; //Url de la imagen
  @Prop() height?: string = 'auto'; //Height del componente

  render() {
    switch (this.variant) {
      case 'simple':
        /**
         * Variant simple.
         * Fotter altamente personalizable, básico.
         */
        return (
          <Host>
            <footer>
              <div class="simple">
                <slot></slot>
              </div>
            </footer>
          </Host>
        );
      case 'block':
        /**
         * Variant block.
         * Footer predefinido con imagen de fondo y un bloque de contenido en el centro
         * Responsive.
         */
        return (
          <Host>
            <footer>
              <div class="block" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
                <div class="block-content">
                  <slot></slot>
                </div>
              </div>
            </footer>
          </Host>
        );
      case 'two-column':
        /**
         * Varaint two-column.
         * Footer predefinido con imagen de fondo y dos bloques de contenido en el centro.
         * Dependiendo de las dimensiones del dispositivo, la distribución de los bloques estará en una
         * misma fila o en dos filas.
         * Responsive.
         */
        return (
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
        );
      default:
        null;
    }
  }
}
