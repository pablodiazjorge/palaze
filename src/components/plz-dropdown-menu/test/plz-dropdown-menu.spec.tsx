import { newSpecPage } from '@stencil/core/testing';
import { PlzDropdownMenu } from '../plz-dropdown-menu';

describe('plz-dropdown-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlzDropdownMenu],
      html: `<plz-dropdown-menu></plz-dropdown-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <plz-dropdown-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </plz-dropdown-menu>
    `);
  });
});
