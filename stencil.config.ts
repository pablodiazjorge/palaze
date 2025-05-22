import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'palaze',
  globalStyle: 'src/global/global-styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      copy: [
        { src: 'assets/icon/Icon-github.svg', dest: 'assets/icon/Icon-github.svg' },
        { src: 'assets/icon/Icon-linkedin.svg', dest: 'assets/icon/Icon-linkedin.svg' },
        { src: 'assets/icon/Icon-mail.svg', dest: 'assets/icon/Icon-mail.svg' },
        { src: 'assets/icon/Icon-palaze.webp', dest: 'assets/icon/Icon-palaze.wepb' },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, //disable service workers
      copy: [
        { src: 'docs/docs.html', dest: 'docs.html' },
        { src: 'docs/docs-button.html', dest: 'docs-button.html' },
        { src: 'docs/docs-card.html', dest: 'docs-card.html' },
        { src: 'docs/docs-divider.html', dest: 'docs-divider.html' },
        { src: 'docs/docs-hero.html', dest: 'docs-hero.html' },
        { src: 'docs/docs-menu.html', dest: 'docs-menu.html' },
        { src: 'docs/docs-menu-item.html', dest: 'docs-menu-item.html' },
        { src: 'docs/docs-tooltip.html', dest: 'docs-tooltip.html' },
        { src: 'docs/docs-spinner.html', dest: 'docs-spinner.html' },
        { src: 'docs/docs-design-system.html', dest: 'docs-design-system.html' },
        { src: 'docs/docs-section.html', dest: 'docs-section.html' },
        { src: 'docs/docs-footer.html', dest: 'docs-footer.html' },
        { src: 'docs/docs-demo-sidebar.html', dest: 'docs-demo-sidebar.html' },
        { src: 'docs/docs-demo-header.html', dest: 'docs-demo-header.html' },
        { src: 'docs/docs-header.html', dest: 'docs-header.html' },
        { src: 'docs/docs-sidebar.html', dest: 'docs-sidebar.html' },
        { src: 'docs/docs-dropdown-menu.html', dest: 'docs-dropdown-menu.html' },
        { src: 'docs/docs-colors.html', dest: 'docs-colors.html' },
        { src: 'docs/docs-showcase.html', dest: 'docs-showcase.html' },
      ],
    },
  ],
};
