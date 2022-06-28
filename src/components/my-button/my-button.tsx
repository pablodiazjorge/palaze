import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }

}
