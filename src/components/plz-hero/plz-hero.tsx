import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'plz-hero',
  styleUrl: 'plz-hero.css',
  shadow: true,
})
export class PlzHero {
  @Prop() variant?: 'default' | 'simple' | 'image' | 'two-column' = 'default';
  @Prop() height: string = '600';
  @Prop() image?: string = '';

  renderImage() {
    return this.image ? (
      <img
        src={this.image}
        alt=""
        class="hero-image"
        loading="eager"
        decoding="async"
        part="pattern-hero"
      />
    ) : null;
  }

  render() {
    const style = {
      '--hero-height': `${this.height}px`,
    };

    switch (this.variant) {
      case 'default':
        return (
          <Host style={style}>
            <div class="hero-default">
              {this.renderImage()}
              <div class="hero-default-content">
                <slot></slot>
              </div>
            </div>
          </Host>
        );

      case 'simple':
        return (
          <Host style={style}>
            <div class="simple">
              <div class="simple-content">
                <slot></slot>
              </div>
            </div>
          </Host>
        );

      case 'image':
        return (
          <Host style={style}>
            <div class="hero-image-only">{this.renderImage()}</div>
          </Host>
        );

      case 'two-column':
        return (
          <Host style={style}>
            <div class="hero-columns" style={{ backgroundImage: this.image ? `url(${this.image})` : 'none' }}>
              <div class="hero-columns-container">
                <div class="hero-columns-content">
                  <slot name="first-column"></slot>
                </div>
                <div class="hero-columns-content">
                  <slot name="second-column"></slot>
                </div>
              </div>
            </div>
          </Host>
        );

      default:
        return null;
    }
  }
}
