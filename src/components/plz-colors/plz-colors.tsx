import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-colors',
  styleUrl: 'plz-colors.css',
  shadow: true,
})
export class PlzColors {

  @Prop() variant: string = 'black';
  @Prop() colors: string = '#023E8A,#a7b3e9,#023E8A,#0096C7,#0077B6';
  private colorsArray: string[] = [];

  connectedCallback() {
    this.convertStringToArray();
  }

  convertStringToArray() {
    this.colorsArray = this.colors.split(',').map(color => color.trim());
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
    ) : this.variant != 'custom' ? (
      <Host>
        <div class="container">
          <div class={`${this.colorsArray[0]}1 color`}><p>{this.colorsArray[0]}</p></div>
          <div class={`${this.colorsArray[0]}2 color`}><p>{this.colorsArray[1]}</p></div>
          <div class={`${this.colorsArray[0]}3 color`}><p>{this.colorsArray[2]}</p></div>
          <div class={`${this.colorsArray[0]}4 color`}><p>{this.colorsArray[3]}</p></div>
          <div class={`${this.colorsArray[0]}5 color`}><p>{this.colorsArray[4]}</p></div>
        </div>
      </Host>
    ) : null;
  }

}
