import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-hero',
  styleUrl: 'plz-hero.css',
  shadow: true,
})
export class PlzHero {
  @Prop() variant?: 'default' | 'simple' | 'image' | 'two-column' = 'default'; //Variantes del componente
  @Prop() height: string = '600'; //Height del componente en px
  @Prop() image?: string = ''; //Url de imagen

  render() {
    switch (this.variant) {
      case 'default':
        /**
         * Variante default.
         * Imagen de fondo con un bloque de contenido en el centro.
         * Dependiendo de las dimensiones del dispositivo, el espacio entre los elementos varía para adaptarse.
         * Responsive.
         */
        return (
          <Host>
            <div class="hero-default" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
              <div class="hero-default-content">
                <slot></slot>
              </div>
            </div>
          </Host>
        );
      case 'simple':
        /**
         * Variante simple.
         * Bloque de contenido en el centro personalizable.
         */
        return (
          <Host>
            <div class="simple" style={{ height: `${this.height}px` }}>
              <div class="simple-content">
                <slot></slot>
              </div>
            </div>
          </Host>
        );
      case 'image':
        /**
         * Variante image.
         * El contenido del hero será una imagen pasada por atributo con las dimensiones dadas también por estos.
         */
        return (
          <Host>
            <div class="hero-default" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}></div>
          </Host>
        );
      case 'two-column':
        /**
         * Variante two-column.
         * Hero predefinido con imagen de fondo y dos bloques de contenido en el centro.
         * Dependiendo de las dimensiones del dispositivo, la distribución de los bloques estará en una
         * misma fila o en dos filas.
         * Responsive.
        */
        return (
          <Host>
            <div class="hero-columns" style={{ 'background-image': `url(${this.image})`, 'height': `${this.height}px` }}>
              <div class="hero-columns-container">
                <div class="hero-columns-content">
                  <slot name="first-column"></slot>
                </div>
                <div class="hero-columns-content">
                  <slot name="second-column"></slot>
                </div>
              </div>
            </div>
          </Host>
        );
      default:
        null;
    }
  }
}
