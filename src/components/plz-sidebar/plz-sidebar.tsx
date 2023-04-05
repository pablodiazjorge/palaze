import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'plz-sidebar',
  styleUrl: 'plz-sidebar.css',
})
export class PlzSidebar {
  @Prop() width: string = '275';
  @Prop() idMain: string;
  @Prop() spaceTop: string = '0';
  @Prop() color: string = 'white';
  @State() private toggled: boolean = true;

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
    }  else if (this.toggled === true && ancho < 920) {
      this.toggled = false;
      document.getElementById('sidebar').style.width = '0';
    } else if (this.toggled === false && ancho < 920) {
      this.toggled = true;
      document.getElementById('sidebar').style.width = `${this.width}px`;
    }
  }

  toggleDisabled(left: string, right: string) {
    this.toggled = false;
    document.getElementById('sidebar').style.width = '0';
    document.getElementById(this.idMain).style.left = left;
    document.getElementById(this.idMain).style.right = right;
  }

  toggleActivated(left: string, right: string) {
    this.toggled = true;
    document.getElementById('sidebar').style.width = `${this.width}px`;
    document.getElementById(this.idMain).style.left = left;
    document.getElementById(this.idMain).style.right = right;
  }

  render() {
    return (
      <Host>
        <button class="button-sidebar" style={{ 'margin-top': `${this.spaceTop}px` }} onClick={() => this.toggle()} innerHTML="&#9776"></button>
        <nav id="sidebar" class="sidebar" style={{ 'width': `${this.width}px`, '--bg-color': `${this.color}`, 'margin-top': `${this.spaceTop}px` }}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
