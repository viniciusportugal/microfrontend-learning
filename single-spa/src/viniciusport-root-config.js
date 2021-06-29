import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    ystem.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@viniciusport/react-single",
  app: () => System.import("@viniciusport/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@viniciusport/react-multiples",
  app: () => System.import("@viniciusport/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@viniciusport/react-lazy",
  app: () => System.import("@viniciusport/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@viniciusport/react-header",
  app: () => System.import("@viniciusport/react-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@viniciusport/react-route",
  app: () => System.import("@viniciusport/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@viniciusport/utils",
  app: () => System.import("@viniciusport/utils"),
  activeWhen: (location) => location.pathname === "/utils",
});

start({
  urlRerouteOnly: true,
});
