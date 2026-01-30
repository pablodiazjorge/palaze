import { Component, Element, h, Prop, Host, State } from '@stencil/core';
import hljs from 'highlight.js';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';

@Component({
  tag: 'plz-showcase-code',
  styleUrl: 'plz-showcase-code.css',
  shadow: true,
})
export class PlzShowcaseCode {
  @Element() el: HTMLElement;
  @Prop() textCode: string;
  @Prop() textSize: string = '18';
  @State() private highlightedCode: string = '';

  async connectedCallback() {
    await this.formatAndHighlight();
  }

  private async formatAndHighlight() {
    if (!this.textCode) return;

    try {
      const formatted = await prettier.format(this.textCode, {
        parser: 'html',
        plugins: [parserHtml],
        printWidth: 4000,
        htmlWhitespaceSensitivity: 'ignore',
      });

      this.highlightedCode = hljs.highlight(formatted, {
        language: 'html',
        ignoreIllegals: true,
      }).value;
    } catch (error) {
      console.error('Error formatting code:', error);
      this.highlightedCode = this.escapeHtml(this.textCode);
    }
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  render() {
    return (
      <Host>
        <pre style={{ 'font-size': `${this.textSize}px`, 'whiteSpace': 'pre-wrap' }}>
          <code innerHTML={this.highlightedCode}></code>
        </pre>
      </Host>
    );
  }
}
