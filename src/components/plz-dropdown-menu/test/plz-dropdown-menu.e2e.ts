import { newE2EPage } from '@stencil/core/testing';

describe('plz-dropdown-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-dropdown-menu></plz-dropdown-menu>');

    const element = await page.find('plz-dropdown-menu');
    expect(element).toHaveClass('hydrated');
  });
});
