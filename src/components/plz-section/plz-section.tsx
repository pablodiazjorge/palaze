import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-section',
  styleUrl: 'plz-section.css',
  shadow: true,
})
export class PlzSection {
  @Prop() variant: 'wrapper' | 'columns' = 'wrapper'; //Variantes del componente

  render() {
    switch (this.variant) {
      /**
       * Variante wrapper
       * Consiste en un contenedor que organiza en filas los componentes pasados por slot.
       * Dependiendo del espacio disponible y el tamaño de los elementos habrá más filas o más columnas.
       * Responsive.
      */
      case 'wrapper':
        return (
          <div class="wrapper">
            <slot></slot>
          </div>
        );
      case 'columns':
        /**
         * Variante columns
         * Consiste en un contenedor que organiza en dos filas el contenido pasado por cada slot (first, second).
         * Dependiendo de las dimensiones del dispositivo, se mostrará el contenido en columnas o en filas.
         * Responsive.
        */
        return (
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
        );
      default:
        null;
    }
  }
}
