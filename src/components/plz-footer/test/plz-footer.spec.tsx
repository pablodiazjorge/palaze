import { newSpecPage } from '@stencil/core/testing';
import { PlzFooter } from '../plz-footer';

describe('plz-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzFooter],
      html: `<plz-footer></plz-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-footer>
    `);
  });
});
