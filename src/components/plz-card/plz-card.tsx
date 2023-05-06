import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-card',
  styleUrl: 'plz-card.css',
  shadow: true,
})
export class PlzCard {
  @Prop() variant?: 'default' | 'simple' | 'header' | 'footer' | 'image' = 'default'; //Variantes del componente
  @Prop() url?: string = ''; //URL a enlace externo o interno
  @Prop() target?: '_self' | '_blank' | '_parent' | '_top' | 'framename' = '_self'; //Forma de acceder a la url
  @Prop() image?: string = ''; //URL de la imagen de fondo
  @Prop() hover?: string = 'blue'; //Color del hover para variante default
  @Prop() width?: string = '220'; //Ancho de tarjeta para variante default

  render() {
    switch (this.variant) {
      case 'default':
        /*
        Variante default:
          Card envuelta en una etiqueta <a> para añadir funcionalidad de enlace/navegación. Dos contenedores internos,
          uno para la imagen que se situa en la parte superior y otro para el contenido descriptivo de este componente.
          El segundo componente permite una amplia personalización de elementos.
        */
        return (
          <a class={`a-${this.variant} glow-${this.hover}`} href={this.url} target={this.target}>
            <div class={`image-container-${this.variant}`} style={{ backgroundImage: `url(${this.image})`, width: `${this.width}px` }}></div>
            <div class={`text-container-${this.variant}`} style={{ width: `${this.width}px` }}>
              <slot></slot>
            </div>
          </a>
        );
      case 'simple':
        /*
        Variante simple:
          Card simple con borde sólido. Contenido personalizable.
        */
        return (
          <div class={`card-${this.variant}`}>
            <slot></slot>
          </div>
        );
      case 'header':
        /*
        Variante header:
          Card con header y borde sólido para determinar las secciones. Contenido personalizable.
        */
        return (
          <Host>
            <div class={`card-${this.variant} header-top`}>
              <slot name="header-content"></slot>
            </div>
            <div class={`card-${this.variant} header-bottom`}>
              <slot name="content"></slot>
            </div>
          </Host>
        );
      case 'footer':
        /*
        Variante footer:
          Card con footer y borde sólido para determinar las secciones. Contenido personalizable.
        */
        return (
          <Host>
            <div class={`card-${this.variant} footer-top`}>
              <slot name="content"></slot>
            </div>
            <div class={`card-${this.variant} footer-bottom`}>
              <slot name="footer-content"></slot>
            </div>
          </Host>
        );
      case 'image':
        /*
        Variante image:
          Card de un único contenedor en el que se hace uso de una imagen de background. Contenido personalizable.
        */
        return (
          <div class={`container-${this.variant}`} style={{ backgroundImage: `url(${this.image})` }}>
            <slot></slot>
          </div>
        );
      default:
        return null;
    }
  }
}
