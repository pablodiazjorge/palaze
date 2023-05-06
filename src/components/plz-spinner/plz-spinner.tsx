import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-spinner',
  styleUrl: 'plz-spinner.css',
  shadow: true,
})
export class PlzSpinner {
  @Prop() variant: 'normal' | 'simple' | 'wave' | 'atom' | 'bola' = 'normal'; //Distintos tipos de variante
  @Prop() colorPrimary: string = '#023E8A'; //Color primario blue-1
  @Prop() colorSecondary: string = '#a7b3e9'; //Color secundario blue-4
  @Prop() colorsBola: string = '#023E8A,#a7b3e9,#023E8A,#0096C7,#0077B6,#0096C7'; //Colores custom de bola
  private colorsBolaArray: string[] = []; //Vector utilizado para interpretar el string de bolas

  /**
   * Función que se llama antes de renderizar el componente
   */
  connectedCallback() {
    this.convertStringToArray();
  }

  /**
   * Función que convierte el string colorsBola al vector colorsBolaArray
   */
  convertStringToArray() {
    this.colorsBolaArray = this.colorsBola.split(',').map(color => color.trim());
  }

  render() {
    switch (this.variant) {
      case 'simple':
        /* Variante simple. Spinner con un único contenedor que gira con un borde de este con color diferenciado */
        return (
          <Host>
            <div class="simple-spinner" style={{ 'border': `8px solid ${this.colorPrimary}`, 'border-left': `8px solid ${this.colorSecondary}` }}></div>
          </Host>
        );
      case 'normal':
        /* Variante normal. Spinner con dos contenedores, en el que uno de ellos se mueve con una forma curva sin seguir un
           movimiento lineal */
        return (
          <Host>
            <div class="spinner" style={{ border: `10px solid ${this.colorSecondary}` }}>
              <div class="spin" style={{ 'border-left': `5px solid ${this.colorPrimary}` }}></div>
            </div>
          </Host>
        );
      case 'wave':
        /* Variante wave. Spinner con un contenedor padre y 6 contenedores que se dimensionan cambiando de escala de
           tal forma que parece una ola*/
        return (
          <Host>
            <div class="playa">
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
              <div class="wave" style={{ background: `linear-gradient(80deg, ${this.colorPrimary}, ${this.colorSecondary}` }}></div>
            </div>
          </Host>
        );
      case 'atom':
        /* Variante Atom. Spinner con una contenedor principal y 3 subcontenedores que funcionan en movimiento como si orbitaran
           al centro del componente padre en 3D al igual que un átomo */
        return (
          <Host>
            <div class="atomo">
              <div class="electron" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
              <div class="electron" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
              <div class="electron" style={{ 'border-bottom': `5px solid ${this.colorPrimary}` }}></div>
            </div>
          </Host>
        );
      case 'bola':
        return (
          /* Variante bola. Spinner que consiste en un contenedor padre con 6 subcontenedores siendo estos bolas que
             giran entorno al centro del contenedor padre con distintas velocidades y colores
             Se hace uso de CSS properties para asignar dinámicamente colores a cada bola en el archivo CSS
             */
          <Host>
            <div class="bolas">
              <div class="bola" style={{ '--color-bola-0': `${this.colorsBolaArray[0]}` }}></div>
              <div class="bola" style={{ '--color-bola-1': `${this.colorsBolaArray[1]}` }}></div>
              <div class="bola" style={{ '--color-bola-2': `${this.colorsBolaArray[2]}` }}></div>
              <div class="bola" style={{ '--color-bola-3': `${this.colorsBolaArray[3]}` }}></div>
              <div class="bola" style={{ '--color-bola-4': `${this.colorsBolaArray[4]}` }}></div>
              <div class="bola" style={{ '--color-bola-5': `${this.colorsBolaArray[5]}` }}></div>
            </div>
          </Host>
        );
      default:
        return null;
    }
  }
}
