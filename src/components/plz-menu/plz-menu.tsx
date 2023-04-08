import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'plz-menu',
  styleUrl: 'plz-menu.css',
  shadow: true,
})
export class PlzMenu {
  @Prop() borderMenu: string = 'all';

  render() {
    return (
      <ul class={`simple border-${this.borderMenu}`}>
        <slot></slot>
      </ul>
    );
  }
}
