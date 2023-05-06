import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'plz-showcase-render',
  styleUrl: 'plz-showcase-render.css',
  shadow: true,
})
export class PlzShowcaseRender {
  @Prop() display: 'inline-flex' | 'block' = 'inline-flex'; //Tipos de display
  @Prop() height: string = ''; //Altura del contenedor showcase (px)
  @Prop() paddingTop: string = '10'; //Espacio superior del contenedor showcase (px)
  @Prop() paddingBottom: string = '10'; //Espacio inferior del contenedor showcase (px)
  @Prop() paddingRight: string = '10'; //Espacio derecho del contenedor showcase (px)
  @Prop() paddingLeft: string = '10'; //Espacio izquierdo del contenedor showcase (px)
  @Prop() verticalAlign: 'center' | 'stretch' | 'start' | 'end' = 'center'; //Posibilidades de alineación vertical de elementos (px)
  @Prop() gap: string = '10'; //Espacio entre objetos (px)

  render() {
    return this.height != '' ? (
      /**
       * Contenedor showcase para código con una altura dada por atributo.
       * Se modifican los parámetros dependiendo de si se han introducido o no,
       * en el caso de no introducirse se uson los por defecto.
       */
      <Host>
        <div
          class={this.display}
          style={{
            height: `${this.height}px`,
            paddingTop: `${this.paddingTop}px`,
            paddingBottom: `${this.paddingBottom}px`,
            paddingLeft: `${this.paddingLeft}px`,
            paddingRight: `${this.paddingRight}px`,
            alignItems: `${this.verticalAlign}`,
            gap: `${this.gap}px`,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    ) : (
      /**
       * Contenedor showcase para código sin altura dada por atributo.
       * Se modifican los parámetros dependiendo de si se han introducido o no,
       * en el caso de no introducirse se uson los por defecto.
       */
      <Host>
        <div
          class={this.display}
          style={{
            paddingTop: `${this.paddingTop}px`,
            paddingBottom: `${this.paddingBottom}px`,
            paddingLeft: `${this.paddingLeft}px`,
            paddingRight: `${this.paddingRight}px`,
            alignItems: `${this.verticalAlign}`,
            gap: `${this.gap}px`
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
