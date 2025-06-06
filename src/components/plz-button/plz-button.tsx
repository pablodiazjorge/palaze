import { Component, h, Host, Prop } from '@stencil/core';
import Github from "../../assets/icon/Icon-github.svg";
import Linkedin from "../../assets/icon/Icon-linkedin.svg";
import Mail from "../../assets/icon/Icon-mail.svg";


const Palaze = "/assets/icon/Icon-palaze.webp";
@Component({
  tag: 'plz-button',
  styleUrl: 'plz-button.css',
  shadow: true,
})

export class PlzButton {
  @Prop() variant?: 'default' | 'icon' | 'progress' = 'default'; //Variantes de botón
  @Prop() size?: 'default' | 'small' | 'big' = 'default'; //Tamaño del botón
  @Prop() color?: 'default' | 'black' | 'purple' | 'blue' | 'green' | 'red' | 'orange' | 'yellow' = 'default'; //Colores del botón default y progress
  @Prop() corners?: 'default' | 'low-rounded' | 'rounded' | 'square' | 'circle' = 'default'; //Forma 
  @Prop() shadowColor?: 'black' | 'purple' | 'blue' | 'green' | 'red' | 'orange' | 'yellow' | '' = ''; //Color de sombra de componente
  @Prop() icon?: string = ''; //nombre de icono o url del icono custom
  @Prop({ mutable: true }) active?: boolean = false; //Boolean que determina si la variante progress está activada
  @Prop() link?: string = ''; //Url a la que se accederá desde el botón
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self'; //Forma de acceder a la url
  @Prop() hoverColor?: string = ''; //Color del hover
  @Prop() colorProgress?: string = 'white'; //Color del spinner de carga de la varainte progress

  render() {
    return this.link != '' && (this.variant == 'default' || this.variant == 'icon') ? (
      <Host>
        <a href={this.link} target={this.target}>
          <button
            class={{
              //Clases generales para todas las variantes
              [`${this.size}-size`]: true,
              // Clases  aplicables a la variante default
              ['hover-color']: this.variant == 'default' && this.hoverColor != '',
              [this.color]: this.variant == 'default',
              [`${this.corners}-border`]: this.variant == 'default',
              [`shadow-${this.shadowColor}`]: this.variant == 'default' && this.shadowColor != '',
              // Clases  aplicables a la variante icon
              [this.variant]: this.variant == 'icon',
              [`${this.variant}-${this.size}-size`]: this.variant == 'icon',
            }}
            style={
              //Estilo que se aplicará si existe hover y se usa la variante default
              this.variant == 'default' && this.hoverColor ? { '--bg-color-hover': this.hoverColor } :
              {}
            }
            >
              {
                //Si se usa la variante icon, se renderiza esta sección de código
                //Opciones de iconos predefinidas
                this.variant == 'icon' && this.icon == 'github' ?
                <img class={`${this.variant}-${this.size}-size`} src={Github} alt={this.icon} />
                : this.variant == 'icon' && this.icon == 'linkedin' ?
                <img class={`${this.variant}-${this.size}-size`} src={Linkedin} alt={this.icon} />
                : this.variant == 'icon' && this.icon == 'palaze' ?
                <img class={`${this.variant}-${this.size}-size`} src={Palaze} alt={this.icon} />
                : this.variant == 'icon' && this.icon == 'mail' ?
                <img class={`${this.variant}-${this.size}-size`} src={Mail} alt={this.icon} />
                : this.variant == 'icon' ?
                //Opción de icono custom
                <img class={`${this.variant}-${this.size}-size`} src={`${this.icon}`} alt={this.icon} />
                :null
              }
              <slot></slot>
          </button>
        </a>
      </Host>
    ) : this.link == '' && (this.variant == 'default' || this.variant == 'icon') ? (
      <Host>
        <button
          class={{
            //Clases generales para todas las variantes
            [`${this.size}-size`]: true,
            // Clases  aplicables a la variante default
            ['hover-color']: this.variant == 'default' && this.hoverColor != '',
            [this.color]: this.variant == 'default',
            [`${this.corners}-border`]: this.variant == 'default',
            [`shadow-${this.shadowColor}`]: this.variant == 'default' && this.shadowColor != '',
            // Clases  aplicables a la variante icon
            [this.variant]: this.variant == 'icon',
            [`${this.variant}-${this.size}-size`]: this.variant == 'icon',
          }}
          style={
            //Estilo que se aplicará si existe hover y se usa la variante default
            this.variant == 'default' && this.hoverColor ? { '--bg-color-hover': this.hoverColor } :
            {}
          }
          >
            {
              //Si se usa la variante icon, se renderiza esta sección de código
              //Opciones de iconos predefinidas
              this.variant == 'icon' && this.icon == 'github' ?
              <img class={`${this.variant}-${this.size}-size`} src={Github} alt={this.icon} />
              : this.variant == 'icon' && this.icon == 'linkedin' ?
              <img class={`${this.variant}-${this.size}-size`} src={Linkedin} alt={this.icon} />
              : this.variant == 'icon' && this.icon == 'palaze' ?
              <img class={`${this.variant}-${this.size}-size`} src={Palaze} alt={this.icon} />
              : this.variant == 'icon' && this.icon == 'mail' ?
              <img class={`${this.variant}-${this.size}-size`} src={Mail} alt={this.icon} />
              : this.variant == 'icon' ?
              //Opción de icono custom
                <img class={`${this.variant}-${this.size}-size`} src={`${this.icon}`} alt={this.icon} />
                :null
              }
            <slot></slot>
          </button>
      </Host>
    ) : this.variant == 'progress' ? (
      <Host>
          <button
          class={{
            //Clases aplicadas a la variante progress
            [`${this.variant}`]: true,
            [`${this.color}`]: true,
            [`${this.size}-size`]: true,
            [`${this.corners}-border`]: true,
            [`shadow-${this.shadowColor}`]: this.shadowColor != '',
          }}
          style={{
            '--wave-color':`${this.colorProgress}`
          }}>{
              //Dependiendo de si el botón está activado o no, se utilizará texto plano o spinner de carga
              this.active ? (
              <div class='playa'>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
              </div>
              ) : (
                <slot></slot>
              )
            }
          </button>
      </Host>
    ) : null;
  }
}