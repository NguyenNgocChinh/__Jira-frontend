export default function ({ app, isHMR }) {
  // Do not run on server
  if (process.server || isHMR) {
    return;
  }

  const locale = localStorage.getItem("i18n_locale");

  if (!locale) {
    localStorage.setItem("i18n_locale", app.i18n.fallbackLocale);
  }

  app.i18n.locale = locale;
}
