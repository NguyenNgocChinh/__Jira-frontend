import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    strategy: "no_prefix",
    defaultLocale: "en",
    fallbackLocale: "en",
    messages: {
      en: require("~/locales/en.json"),
      vi: require("~/locales/vi.json"),
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieCrossOrigin: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  });
};
