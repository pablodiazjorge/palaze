import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-menu-item',
  styleUrl: 'plz-menu-item.css',
  shadow: true,
})
export class PlzMenuItem {
  @Prop() variant?: 'simple' | 'custom' | 'image' = 'simple'; //Distintas variantes del componente
  @Prop() link?: string; //url al enlace
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self'; //Forma de acceder a la url
  @Prop() colorHover?: string = ''; //Color al pasar cursor
  @Prop() colorText?: string = 'white'; //Color del texto al pasar cursor
  @Prop() imageUrl?: string = ''; //url de la imagen para la variante del menu-item image
  @Prop() submenu: boolean = false; //booleano para saber si es submenu
  @Prop({ mutable: true }) active: boolean = false; //booleano para saber si el item está activado (cambio en color)

  /**
   * Función que cambia el estado de la propiedad active
   */
  activate() {
    this.active = !this.active;
  }

  render() {
    switch (this.variant) {
      /**
       * Variante simple
       * Estilo simple con opción de color custom en hover o dejarlo predeterminado
       */
      case 'simple':
        return this.colorHover != '' ? (
          /* Custom hover */
          <Host>
            <a href={this.link} target={this.target} class={`link simple-custom`} style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : (
          /* Hover predeterminado */
          <Host>
            <a href={this.link} target={this.target} class={`link simple ${this.active ? 'active-simple' : ''}`} onClick={() => this.activate()}>
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        );
      /**
       * Variante custom
       * Estilo propio palaze con tres posibilidades
       *    Custom color hover, link
       *    Custom color hover
       *    Custom (no link, color hover predefinido)
       */
      case 'custom':
        return this.colorHover != '' && this.link != '' ? (
          /* Custom color hover, link */
          <Host>
            <a
              href={this.link}
              target={this.target}
              class={`link custom ${this.active ? 'active' : ''}`}
              onClick={() => this.activate()}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <li class={{ item: true, submenu: this.submenu }}>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : this.colorHover != '' ? (
          /* Custom color hover */
          <Host>
            <li
              class={`item custom ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}
              onClick={() => this.activate()}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <slot></slot>
            </li>
          </Host>
        ) : (
          /* Custom (no link, color hover predefinido) */
          <Host>
            <li class={{ item: true, active: this.active, submenu: this.submenu }} onClick={() => this.activate()}>
              <slot></slot>
            </li>
          </Host>
        );
      /**
       * Variante image
       * Menu-item con imagen y estilo propia palaze con tres posibilidades
       *    Custom color hover, link
       *    Custom color hover
       *    Custom (no link, color hover predefinido)
       */
      case 'image':
        return this.colorHover && this.link != '' ? (
          /* Custom color hover, link */
          <Host>
            <a
              href={this.link}
              target={this.target}
              class="link custom"
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              onClick={() => this.activate()}
            >
              <li class={`item-image grid-container ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`} onClick={() => this.activate()}>
                <div class="grid-item">
                  <img src={this.imageUrl} />
                </div>
                <slot></slot>
              </li>
            </a>
          </Host>
        ) : this.colorHover != '' ? (
          /* Custom color hover */
          <Host>
            <li
              class={`item-image grid-container ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`}
              onClick={() => this.activate()}
              style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
            >
              <div class="grid-item">
                <img src={this.imageUrl} />
              </div>
              <slot></slot>
            </li>
          </Host>
        ) : (
          /* Custom (no link, color hover predefinido) */
          <Host>
            <li class={`item-image grid-container item-image-hover ${this.active ? 'active' : ''} ${this.submenu} ? 'submenu' : ''`} onClick={() => this.activate()}>
              <div class="grid-item">
                <img src={this.imageUrl} />
              </div>
              <slot></slot>
            </li>
          </Host>
        );
      default:
        null;
    }
  }
}
