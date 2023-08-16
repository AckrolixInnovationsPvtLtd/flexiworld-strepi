// export default {
//   config: {
//     locales: ["en"],
//     translations: {
//       en: {
//         "app.components.LeftMenu.navbrand.title": "FLEXIWORLD",
//         "app.components.LeftMenu.navbrand.workplace": "Dashboard",
//       },
//     },
//   },
//   bootstrap() {},
// };

// import favicon from "./extensions/logoDc.png";

// const config = {
//   head: {
//     favicon: favicon,
//   },
//   menu: {
//     logo: favicon,
//   },
//   auth: {
//     logo: favicon,
//   },
//   translations: {
//     en: {
//       "app.components.LeftMenu.navbrand.title": "FLEXIWORLD",
//       "app.components.LeftMenu.navbrand.workplace": "starging",
//     },
//   },
// };

// const bootstrap = (app) => {
//   console.log(app);
// };

// export default {
//   config,
//   bootstrap,
// };
export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Flexiworld Dashboard",
        "app.components.LeftMenu.navbrand.title": "Flexiworld-workplace",
      },
    },
  },
  bootstrap() {
    document.title = "Test";
  },
};
