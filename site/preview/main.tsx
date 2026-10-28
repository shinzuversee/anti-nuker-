// Version d'aperçu du site : tout tourne dans le navigateur, sans serveur.
// La navigation est gardée en mémoire, pour fonctionner même dans un cadre intégré.
// Les fonctions qui exigent un serveur (paiement, réservation) sont remplacées
// par des messages d'indisponibilité (voir preview/stubs).
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { introScript } from "@/components/motion/intro";
import "@/styles.css";

// Même logique que le script placé dans <head> sur le vrai site.
new Function(introScript)();

const router = createRouter({
  routeTree,
  context: { queryClient: new QueryClient() },
  history: createMemoryHistory({ initialEntries: ["/"] }),
  defaultPreloadStaleTime: 0,
});

// L'application est montée directement sur <body>, comme sur le vrai site où elle
// englobe toute la page. Montée dans un <div>, les fenêtres et listes déroulantes
// (qui s'affichent dans <body>) feraient tourner React en boucle au premier clic.
createRoot(document.body).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
