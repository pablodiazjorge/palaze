import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-showcase',
  styleUrl: 'plz-showcase.css',
  shadow: true,
})
export class PlzShowcase {

  render() {
    return (
      /**
       * Contener padre para los dos componentes hijo plz-showcase-render y plz-showcase-code
       * Permite la libertad para hacer uso de los componentes hijo por separado o juntos. 
      */
      <div class="showcase">
        <div><slot></slot></div>
      </div>
    );
  }

}
