import { Component, h, Prop, Host } from '@stencil/core';

import hljs from 'highlight.js';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/plugins/html';

@Component({
  tag: 'plz-showcase-code',
  styleUrl: 'plz-showcase-code.css',
  shadow: true,
})
export class PlzShowcaseCode {
  @Prop() textCode: string; //Texto que tomará formato de código html
  @Prop() textSize: string = '18'; //Tamaño de letra del código html en px
  private highlightedCode: string = ''; //Cadena con el texto con formato

   async componentWillLoad() {
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
      console.error('Error en formateo o resaltado:', error);
      this.highlightedCode = this.textCode;
    }
  }

  render() {
    /**
     * Se utiliza esta estructura para que la librería hightlight.js reconozca el código.
    */
    return (
      <Host>
        <pre style={{ 'font-size': `${this.textSize}px`, whiteSpace: 'pre-wrap' }}>
          <code innerHTML={this.highlightedCode}></code>
        </pre>
      </Host>
    );
  }
}
