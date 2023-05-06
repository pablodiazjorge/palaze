import { Component, h, Prop, Host } from '@stencil/core';

import hljs from 'highlight.js';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

@Component({
  tag: 'plz-showcase-code',
  styleUrl: 'plz-showcase-code.css',
  shadow: true,
})
export class PlzShowcaseCode {
  @Prop() textCode: string; //Texto que tomará formato de código html
  @Prop() textSize: string = '18'; //Tamaño de letra del código html en px
  private highlightedCode: string; //Cadena con el texto con formato

  /**
   * Antes de renderizar el componente, se interpreta el texto a código html y se le aplica un formato mediante la
   * librería hightlight.js. También se le aplica un cambio de formato con la librería prettier para mejorar la disposición
   * de párrafos e indentaciones.
  */
  componentWillLoad() {
    this.highlightedCode = hljs.highlight(this.textCode, {language: "html", ignoreIllegals: true }).value;
    this.highlightedCode = prettier.format(this.highlightedCode, {parser: 'html', plugins: [parserHtml],});
  }

  render() {
    /**
     * Se utiliza esta estructura para que la librería hightlight.js reconozca el código.
    */
    return (
      <Host>
        <pre style={{ 'font-size': `${this.textSize}px` }}>
          <code innerHTML={this.highlightedCode}></code>
        </pre>
      </Host>
    );
  }
}
