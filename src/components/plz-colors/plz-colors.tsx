import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-colors',
  styleUrl: 'plz-colors.css',
  shadow: true,
})
export class PlzColors {

  @Prop() variant?: 'black' | 'green' | 'blue' | 'red' | 'yellow' | 'orange' | 'purple' | 'custom' = 'black'; //Variantes del componente 
  @Prop() colors: string = '#732487,#023E8A,#0077B6,#0096C7,#a7b3e9'; //colores custom para la paleta del componente
  @Prop() colorsText: string = '#ffffff,#ffffff,#ffffff,#ffffff,#ffffff'; //colores custom para los identificadores de texto de la paleta del componente
  private colorsArray: string[] = []; //array para conversion de colores
  private colorsTextArray: string[] = []; //array para conversion de colores de texto

  /**
   * Función que se inicia antes de renderizar el componente
   */
  connectedCallback() {
    this.convertStringToArray();
  }

  /**
   * Convierte el atributo colorText y colors pasado por componente en un array de strings y lo
   * almacena en colorsTextArray y colorsArray respectivamente
   */
  convertStringToArray() {
    this.colorsArray = this.colors.split(',').map(color => color.trim());
    this.colorsTextArray = this.colorsText.split(',').map(color => color.trim());
  }

  render() {
    return this.variant != 'custom' ? (
      /*
      * Variant de las 7 paletas del Design System 'black'-'green'-'blue'-'red'-'yellow'-'orange'-'purple'
      */
      <Host>
        <div class="container">
          <div class={`${this.variant}1 color`}><p>--plz-color-{this.variant}-1</p></div>
          <div class={`${this.variant}2 color`}><p>--plz-color-{this.variant}-2</p></div>
          <div class={`${this.variant}3 color`}><p>--plz-color-{this.variant}-3</p></div>
          <div class={`${this.variant}4 color`}><p>--plz-color-{this.variant}-4</p></div>
          <div class={`${this.variant}5 color`}><p>--plz-color-{this.variant}-5</p></div>
        </div>
      </Host>
    ) : this.variant == 'custom' ? (
      /*
      * Variant custom del componente colors que permite elegir los colores de la paleta y del texto mediante
      * los atributos color y color-text
      */
      <Host>
        <div class="container">
          <div class={`color custom-color1 custom-text-color1`} style={{'--color1':`${this.colorsArray[0]}`, '--color-text1':`${this.colorsTextArray[0]}`}}><p>{this.colorsArray[0]}</p></div>
          <div class={`color custom-color2 custom-text-color2`} style={{'--color2':`${this.colorsArray[1]}`, '--color-text2':`${this.colorsTextArray[1]}`}}><p>{this.colorsArray[1]}</p></div>
          <div class={`color custom-color3 custom-text-color3`} style={{'--color3':`${this.colorsArray[2]}`, '--color-text3':`${this.colorsTextArray[2]}`}}><p>{this.colorsArray[2]}</p></div>
          <div class={`color custom-color4 custom-text-color4`} style={{'--color4':`${this.colorsArray[3]}`, '--color-text4':`${this.colorsTextArray[3]}`}}><p>{this.colorsArray[3]}</p></div>
          <div class={`color custom-color5 custom-text-color5`} style={{'--color5':`${this.colorsArray[4]}`, '--color-text5':`${this.colorsTextArray[4]}`}}><p>{this.colorsArray[4]}</p></div>
        </div>
      </Host>
    ) : null;
  }
}
