import { newE2EPage } from '@stencil/core/testing';

describe('plz-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<plz-footer></plz-footer>');

    const element = await page.find('plz-footer');
    expect(element).toHaveClass('hydrated');
  });
});
