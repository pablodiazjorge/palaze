import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'plz-sidebar',
  styleUrl: 'plz-sidebar.css',
})
export class PlzSidebar {
  @Element() el: HTMLElement;
  @Prop() width: string = '275';
  @Prop() idMain: string;
  @Prop() spaceTop: string = '0';
  @Prop() color: string = 'white';
  @State() private toggled: boolean = true;

  private get sidebarElement(): HTMLElement | null {
    return this.el.querySelector('.sidebar');
  }

  private get mainElement(): HTMLElement | null {
    if (!this.idMain) return null;
    return document.getElementById(this.idMain);
  }

  private updateSidebarStyles(width: string, borderRight?: string) {
    const sidebar = this.sidebarElement;
    if (sidebar) {
      sidebar.style.width = width;
      if (borderRight !== undefined) {
        sidebar.style.borderRight = borderRight;
      }
    }
  }

  private updateMainMargins(left: string, right: string) {
    const main = this.mainElement;
    if (main) {
      main.style.marginLeft = left;
      main.style.marginRight = right;
    }
  }

  toggle() {
    const ancho = window.innerWidth;
    if (this.toggled && ancho >= 1440) {
      this.toggleDisabled('20%', '20%');
    } else if (!this.toggled && ancho >= 1440) {
      this.toggleActivated('30%', '20%');
    } else if (this.toggled && ancho >= 920 && ancho < 1440) {
      this.toggleDisabled('10%', '10%');
    } else if (!this.toggled && ancho >= 920 && ancho < 1440) {
      this.toggleActivated('30%', '10%');
    } else if (this.toggled && ancho < 920) {
      this.toggled = false;
      this.updateSidebarStyles('0');
    } else if (!this.toggled && ancho < 920) {
      this.toggled = true;
      this.updateSidebarStyles(`${this.width}px`);
    }
  }

  toggleDisabled(left: string, right: string) {
    this.toggled = false;
    this.updateSidebarStyles('0', 'none');
    this.updateMainMargins(left, right);
  }

  toggleActivated(left: string, right: string) {
    this.toggled = true;
    this.updateSidebarStyles(`${this.width}px`, '1px solid #d4d4d8');
    this.updateMainMargins(left, right);
  }

  render() {
    return (
      <Host>
        <button class="button-sidebar" style={{ 'margin-top': `${this.spaceTop}px` }} onClick={() => this.toggle()} innerHTML="&#9776"></button>
        <nav class="sidebar" style={{ 'width': `${this.width}px`, '--bg-color': `${this.color}` }}>
          <slot></slot>
        </nav>
      </Host>
    );
  }
}
