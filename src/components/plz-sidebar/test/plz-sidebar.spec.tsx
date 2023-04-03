import { newSpecPage } from '@stencil/core/testing';
import { PlzSidebar } from '../plz-sidebar';

describe('plz-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzSidebar],
      html: `<plz-sidebar></plz-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-sidebar>
    `);
  });
});
