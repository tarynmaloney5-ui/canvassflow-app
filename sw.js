// Minimal service worker so browsers offer "Install CanvassFlow". It doesn't cache anything:
// the app always loads fresh from the server.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
