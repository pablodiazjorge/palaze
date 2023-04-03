import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'plz-sidebar',
  styleUrl: 'plz-sidebar.css'
})
export class PlzSidebar {
  @Prop() width: string = '275';
  @Prop() idMain: string;
  @State() private toggled: boolean = false;

  toggle() {
    if (this.toggled === false) {
      this.toggled = true;
      document.getElementById('sidebar').style.width = '0';
      document.getElementById(this.idMain).style.left = '20%';
      document.getElementById('sidebar').style.borderLeft = 'none';
    } else if (this.toggled === true) {
      this.toggled = false;
      document.getElementById('sidebar').style.width = `${this.width}px`;
      document.getElementById(this.idMain).style.left = '30%';
      document.getElementById('sidebar').style.borderLeft = '1px solid #495057';
    }
  }

  render() {
    return (
      <Host>
        <button class="button-sidebar" onClick={() => this.toggle()} innerHTML='&#9776'></button>
        <nav id="sidebar" class="sidebar" style={{ width: `${this.width}px` }}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
