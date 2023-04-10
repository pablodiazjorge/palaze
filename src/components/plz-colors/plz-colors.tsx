import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-colors',
  styleUrl: 'plz-colors.css',
  shadow: true,
})
export class PlzColors {

  @Prop() variant: string = 'black';
  @Prop() colors: string = '#732487,#023E8A,#0077B6,#0096C7,#a7b3e9';
  @Prop() colorsText: string = '#ffffff,#ffffff,#ffffff,#ffffff,#ffffff';
  private colorsArray: string[] = [];
  private colorsTextArray: string[] = [];

  connectedCallback() {
    this.convertStringToArray();
  }

  convertStringToArray() {
    this.colorsArray = this.colors.split(',').map(color => color.trim());
    this.colorsTextArray = this.colorsText.split(',').map(color => color.trim());
  }

  render() {
    return this.variant != 'custom' ? (
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
