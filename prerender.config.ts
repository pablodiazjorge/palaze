import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
  // Para que no salga a "crawlear" todas las URL que encuentre:
  crawlUrls: false,

  // Lista explícita de rutas que quieres prerenderizar:
  entryUrls: [
    '/',
  ],

  // Opcional: si quieres ver logs durante el prerender,
  // o modificar las opciones de hydrate:
  hydrateOptions: url => ({
    runtimeLogging: false
  })
};