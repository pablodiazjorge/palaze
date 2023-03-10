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
  @Prop() textCode: string;
  private highlightedCode: string;

  componentWillLoad() {
    this.highlightedCode = hljs.highlight('html', this.textCode).value;
    this.highlightedCode = prettier.format(this.highlightedCode, {
      parser: 'html',
      plugins: [parserHtml],
    });
  }

  render() {
    return (
      <Host>
        <pre>
          <code innerHTML={this.highlightedCode}></code>
        </pre>
      </Host>
    );
  }
}
