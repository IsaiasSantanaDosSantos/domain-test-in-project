// Este código opcional é usado para registrar um service worker.
// register() não é chamado por padrão.

// Isso permite que o aplicativo carregue mais rápido nas visitas subsequentes em produção e fornece
// possui recursos off-line. No entanto, isso também significa que os desenvolvedores (e usuários)
// só verá atualizações implantadas em visitas subsequentes a uma página, depois de todas as
// abas existentes abertas na página foram fechadas, pois foram armazenadas em cache anteriormente
// os recursos são atualizados em segundo plano.

// Para saber mais sobre os benefícios deste modelo e instruções sobre como
// aceite, leia https://cra.link/PWA

const isLocalhost = Boolean(
  (window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    )) &&
    window.location.hostname !== "isaiassantana.com.br",
);

export function register(config) {
  if (
    (process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "gh-pages") &&
    "serviceWorker" in navigator
  ) {
    // O construtor de URL está disponível em todos os navegadores que suportam SW.
    const baseUrl = process.env.PUBLIC_URL || "/";
    console.log("Caminho:", `${baseUrl}/service-worker.js`);
    const swUrl = `/service-worker.js`;

    window.addEventListener("load", () => {
      if (isLocalhost) {
        // Isso está sendo executado em localhost. Vamos verificar se um service worker ainda existe ou não.
        checkValidServiceWorker(swUrl, config);

        // Adicione algum registro adicional ao localhost, apontando os desenvolvedores para o
        // documentação do trabalhador de serviço/PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://cra.link/PWA",
          );
        });
      } else {
        // Não é localhost. Basta registrar o trabalhador de serviço.
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              // Neste ponto, o conteúdo pré-armazenado em cache atualizado foi buscado,
              // mas o service worker anterior ainda servirá o mais antigo
              // conteúdo até que todas as abas do cliente sejam fechadas.
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://cra.link/PWA.",
              );

              // Executar retorno de chamada
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Neste ponto, tudo foi pré-armazenado em cache.
              // É o momento perfeito para exibir um
              // "O conteúdo é armazenado em cache para uso offline." mensagem.
              console.log("Content is cached for offline use.");

              // Executar retorno de chamada
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Verifica se o service worker pode ser encontrado. Se não for possível recarregar a página.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      // Certifique-se de que o service worker exista e que realmente estejamos obtendo um arquivo JS.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // Nenhum trabalhador de serviço encontrado. Provavelmente um aplicativo diferente. Recarregue a página.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Trabalhador de serviço encontrado. Proceda normalmente.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode.",
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
