import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-menu',
  styleUrl: 'plz-menu.css',
  shadow: true,
})
export class PlzMenu {
  @Prop() borderMenu?: 'all' | 'top|bottom' | 'left|right' | 'top' | 'bottom' | 'right' | 'left' | 'none' = 'all'; //Estilos de bordes pasados por componente.

  render() {
    return (
      /**
       * Menu creado mediante una lista, será el componente padre para una lista de tipos de menu hijo.
       * Acepta cualquier elementos pasado por slot.
       */
      <ul class={`simple border-${this.borderMenu}`}>
        <slot></slot>
      </ul>
    );
  }
}
