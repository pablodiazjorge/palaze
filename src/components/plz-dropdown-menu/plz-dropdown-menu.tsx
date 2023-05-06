import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-dropdown-menu',
  styleUrl: 'plz-dropdown-menu.css',
  shadow: true,
})
export class PlzDropdownMenu {
  @Prop() variant: 'simple' | 'custom' = 'simple'; //Distintas variables del componente
  @Prop({ mutable: true }) active: boolean = false; //booleano para saber si el item está activado (cambio en color)
  @Prop() link?: string; //url al enlace
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self'; //Forma de acceder a la url
  @Prop() colorHover: string = ''; //Color del item al pasar el cursor por encima
  @Prop() colorText: string = 'white'; //color del texto al hacer hover
  @Prop() static: boolean = false; //booleano para mantener fijo el dropdown

  /**
   * Función que cambia el estado de la propiedad active
   */
  changeActive() {
    this.active = !this.active;
  }

  render() {
    switch (this.variant) {
      /**
       * Variante simple
       * Dropdown, estilo simple con cuatro posibilidades
       *    Dropdown estatico, link
       *    Link
       *    Estatico
       *    No link, no estatico
       */
      case 'simple':
        return this.link != '' && this.static ? (
          /* Dropdown estatico, link */
          <Host>
            <li>
              <a href={this.link} target={this.target} class={{ simple: true, item: true }}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.static }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.link != '' ? (
          /* Link */
          <Host>
            <li>
              <a href={this.link} target={this.target} class={{ simple: true, item: true, selected: this.active }} onClick={() => this.changeActive()}>
                <slot></slot>
              </a>
              <ul class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.static ? (
          /* Estatico */
          <Host>
            <li>
              <a class={{ simple: true, item: true }}>
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.static }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : (
          /* No link, no estatico */
          <Host>
            <li>
              <a class={{ simple: true, item: true, selected: this.active }} onClick={() => this.changeActive()}>
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        );
      case 'custom':
      /**
       * Variante custom
       * Dropdown, estilo propio palaze con cuatro posibilidades
       *    Dropdown estatico, link
       *    Link
       *    Estatico
       *    No link, no estatico
      */
        return this.link != '' && this.static ? (
          /* Dropdown estatico, link */
          <Host>
            <li>
              <a
                href={this.link}
                target={this.target}
                class={{ custom: true, item: true }}
                style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
              >
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.static }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.link != '' ? (
          /* Link */
          <Host>
            <li>
              <a
                href={this.link}
                target={this.target}
                class={{ custom: true, item: true, active: this.active }}
                style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
                onClick={() => this.changeActive()}
              >
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : this.static ? (
          /* Estatico */
          <Host>
            <li>
              <a class={{ custom: true, item: true }} style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}>
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.static }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        ) : (
          /* No link, no estatico */
          <Host>
            <li>
              <a
                class={{ custom: true, item: true, active: this.active }}
                style={{ '--bg-color-hover': `${this.colorHover}`, '--bg-color-text': `${this.colorText}` }}
                onClick={() => this.changeActive()}
              >
                <slot></slot>
              </a>
              <ul id="#sub-menu" class={{ dropdown: this.active }}>
                <slot name="dropdown"></slot>
              </ul>
            </li>
          </Host>
        );
      default:
        null;
    }
  }
}
