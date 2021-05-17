import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
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
  name: "@viniciusport/react-parcel",
  app: () => System.import("@viniciusport/react-parcel"),
  activeWhen: ["/react-parcel"],
});

start({
  urlRerouteOnly: true,
});
