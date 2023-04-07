import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'palaze-web',
  globalStyle: 'src/global/global-styles.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'pages/docs.html', dest: 'docs.html' },
        { src: 'pages/docs-button.html', dest: 'docs-button.html' },
        { src: 'pages/docs-card.html', dest: 'docs-card.html' },
        { src: 'pages/docs-divider.html', dest: 'docs-divider.html' },
        { src: 'pages/docs-hero.html', dest: 'docs-hero.html' },
        { src: 'pages/docs-menu.html', dest: 'docs-menu.html' },
        { src: 'pages/docs-menu-item.html', dest: 'docs-menu-item.html' },
        { src: 'pages/docs-tooltip.html', dest: 'docs-tooltip.html' },
        { src: 'pages/docs-spinner.html', dest: 'docs-spinner.html' },
        { src: 'pages/docs-design-system.html', dest: 'docs-design-system.html' },
        { src: 'pages/docs-section.html', dest: 'docs-section.html' },
        { src: 'pages/docs-footer.html', dest: 'docs-footer.html' },
        { src: 'pages/docs-demo-sidebar.html', dest: 'docs-demo-sidebar.html' },
        { src: 'pages/docs-demo-header.html', dest: 'docs-demo-header.html' },
        { src: 'pages/docs-header.html', dest: 'docs-header.html' },
        { src: 'pages/docs-sidebar.html', dest: 'docs-sidebar.html' },
        { src: 'pages/docs-dropdown-menu.html', dest: 'docs-dropdown-menu.html' }
      ],
    },
  ],
};
