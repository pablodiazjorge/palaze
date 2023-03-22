import { newE2EPage } from '@stencil/core/testing';

describe('plz-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-section></plz-section>');

    const element = await page.find('plz-section');
    expect(element).toHaveClass('hydrated');
  });
});
