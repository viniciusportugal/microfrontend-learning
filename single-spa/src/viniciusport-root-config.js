import { registerApplication, start } from "single-spa";

fetch("https://run.mocky.io/v3/61fdad94-a767-4585-9ef2-10b128cd7e57")
  .then((resp) => resp.json())
  .then((data) => {
    data.applications.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen],
      });
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });
