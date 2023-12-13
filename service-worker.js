/* eslint-disable no-restricted-globals */

// Este service worker pode ser customizado!
// Consulte https://developers.google.com/web/tools/workbox/modules
// para a lista de módulos do Workbox disponíveis ou adicione qualquer outro
// código que você deseja.
// Você também pode remover este arquivo se preferir não usar um
// service worker, e a etapa de criação do Workbox será ignorada.

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

// Pré-armazene em cache todos os ativos gerados pelo seu processo de construção.
// Suas URLs são injetadas na variável de manifesto abaixo.
// Esta variável deve estar presente em algum lugar do arquivo do service worker,
// mesmo se você decidir não usar o pré-cache. Veja https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Configure o roteamento no estilo App Shell, para que todas as solicitações de navegação
// são preenchidos com seu shell index.html. Saiba mais em
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // Retorne false para isentar as solicitações de serem atendidas por index.html.
  ({ request, url }) => {
    // Se isto não for uma navegação, pule.
    if (request.mode !== "navigate") {
      return false;
    } // Se este for um URL que começa com /_, pule.

    if (url.pathname.startsWith("/_")) {
      return false;
    } // Se isto parecer uma URL para um recurso, porque contém // uma extensão de arquivo, pule.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Retorne true para sinalizar que queremos usar o manipulador.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"),
);

// Um ​​exemplo de rota de cache em tempo de execução para solicitações que não são tratadas pelo
// pré-armazenar em cache, neste caso solicitações .png de mesma origem, como aquelas de in public/
registerRoute(
  // Adicione quaisquer outras extensões de arquivo ou critérios de roteamento conforme necessário.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"), // Personalize esta estratégia conforme necessário, por exemplo, mudando para CacheFirst.
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Certifique-se de que quando esse cache de tempo de execução atingir o tamanho máximo, o
      // as imagens usadas menos recentemente são removidas.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  }),
);

// Isso permite que o aplicativo da web acione skipWaiting via
//registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
