import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'plz-sidebar',
  styleUrl: 'plz-sidebar.css',
})
export class PlzSidebar {
  @Prop() width: string = '275'; //Ancho del sidebar
  @Prop() idMain: string; /* Id de la sección principal de la página donde se situa el sidebar, se utiliza para dar funcionalidad */
  @Prop() spaceTop: string = '0'; // Espacio superior respecto a la página
  @Prop() color: string = 'white'; //Color del interior del sidebar
  @State() private toggled: boolean = true; //Estado para determinar si el sidebar está deplegado

  /**
   * Método que determina el desplazamiendo del contenido principal respecto al sidebar
   * haciendo uso del estado toggled que cambia al hacer uso del botón del sidebar
   * para ajustar su tamaño de tal manera que sea visible correctamente para todas las dimensiones
   * de dispositivo.
   * RESPONSIVE.
   */
  toggle() {
    const ancho = window.innerWidth;
    if (this.toggled == true && ancho >= 1440) {
      this.toggleDisabled('20%', '20%');
    } else if (this.toggled == false && ancho >= 1440) {
      this.toggleActivated('30%', '20%');
    } else if (this.toggled == true && ancho >= 920 && ancho < 1440) {
      this.toggleDisabled('10%', '10%');
    } else if (this.toggled == false && ancho >= 920 && ancho < 1440) {
      this.toggleActivated('30%', '10%');
    } else if (this.toggled === true && ancho < 920) {
      this.toggled = false;
      document.getElementById('sidebar').style.width = '0';
    } else if (this.toggled === false && ancho < 920) {
      this.toggled = true;
      document.getElementById('sidebar').style.width = `${this.width}px`;
    }
  }

  /**
   * Función usada desde su función padre toggle() para simplificar y reutilizar código.
   * Permite aplicar estilos dependiendo de los parámetros right and left que reciba.
   * Estos parámetros serán usados para aplicar márgenes cuando el estado toggle se desactive.
   * También se aplicarán otros estilos.
   * @param left 
   * @param right 
   */
  toggleDisabled(left: string, right: string) {
    this.toggled = false;
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('sidebar').style.borderRight = 'none';
    document.getElementById(this.idMain).style.marginLeft = left;
    document.getElementById(this.idMain).style.marginRight = right;
  }

  /**
   * Función usada desde su función padre toggle() para simplificar y reutilizar código.
   * Permite aplicar estilos dependiendo de los parámetros right and left que reciba.
   * Estos parámetros serán usados para aplicar márgenes cuando el estado toggle se active.
   * También se aplicarán otros estilos.
   * @param left 
   * @param right 
   */
  toggleActivated(left: string, right: string) {
    this.toggled = true;
    document.getElementById('sidebar').style.width = `${this.width}px`;
    document.getElementById('sidebar').style.borderRight = '1px solid #d4d4d8';
    document.getElementById(this.idMain).style.marginLeft = left;
    document.getElementById(this.idMain).style.marginRight = right;
  }

  render() {
    return (
      /**
       * Componente sidebar que consta de un bottón bocadillo que hace función de toggle y un contenedor
       * de navegación que representa al sidebar.
       */
      <Host>
        <button class="button-sidebar" style={{ 'margin-top': `${this.spaceTop}px` }} onClick={() => this.toggle()} innerHTML="&#9776"></button>
        <nav id="sidebar" class="sidebar" style={{ 'width': `${this.width}px`, '--bg-color': `${this.color}` }}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
