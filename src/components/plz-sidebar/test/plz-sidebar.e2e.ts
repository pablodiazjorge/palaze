import { newE2EPage } from '@stencil/core/testing';

describe('plz-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-sidebar></plz-sidebar>');

    const element = await page.find('plz-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
