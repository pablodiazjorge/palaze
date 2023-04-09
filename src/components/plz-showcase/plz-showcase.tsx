import { Component, h } from '@stencil/core';

@Component({
  tag: 'plz-showcase',
  styleUrl: 'plz-showcase.css',
  shadow: true,
})
export class PlzShowcase {

  render() {
    return (
      <div class="showcase">
        <div><slot></slot></div>
      </div>
    );
  }

}
