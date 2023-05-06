import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'plz-divider',
  styleUrl: 'plz-divider.css',
  shadow: true,
})
export class PlzDivider {
  @Prop() type?: 'solid' | 'dashed' | 'dotted' = 'solid'; //Tipos de formas
  @Prop() variant?: 'default' | 'custom' = 'default'; //Varaintes del componente
  @Prop() color?: string = '#d4d4d8'; //Color del divider
  @Prop() height?: string = '1'; //Altura del divider
  @Prop() spaceTop?: string = '0'; //Espacio superior con el contenido
  @Prop() spaceBottom?: string = '0'; //Espacio inferior con el contenido
  @Prop() customDivider?: string = ''; //url de imagen custom para divider
  @Prop() customPosition?: string = 'top left'; //posicion de la imagen

  render() {
    switch (this.variant) {
      case 'default':
        /**
         * Variante default.
         * Representa un hr personalizable en color, type, height, espacio entre los elementos
         */
        return (
          <Host style={{ 'margin-top': `${this.spaceTop}px`, 'margin-bottom': `${this.spaceBottom}px` }}>
            <hr class="stroke" style={{ border: `${this.height}px ${this.type} ${this.color}` }} />
          </Host>
        );
      case 'custom':
        /**
         * Variante custom.
         * Representa un divider pero con una imagen personalizable en tamaño y espacio entre elementos, también en la posición
         */
        return (
          <Host style={{ 'margin-top': `${this.spaceTop}px`, 'margin-bottom': `${this.spaceBottom}px` }}>
            <div class="custom" style={{ 'background-image': `url(${this.customDivider})`, 'height': `${this.height}px`, 'backgroundPosition': `${this.customPosition}` }}></div>
          </Host>
        );
      default:
        return null;
    }
  }
}
