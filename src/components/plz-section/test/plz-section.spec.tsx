import { newSpecPage } from '@stencil/core/testing';
import { PlzSection } from '../plz-section';

describe('plz-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzSection],
      html: `<plz-section></plz-section>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-section>
    `);
  });
});
