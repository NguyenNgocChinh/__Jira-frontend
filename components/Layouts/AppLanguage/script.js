export default {
  name: "AppLanguage",
  computed: {
    availableLanguage() {
      return [
        {
          value: "en",
          label: "English",
        },
        {
          value: "vi",
          label: "Việt Nam",
        },
      ];
    },
  },
  methods: {
    handleChange(value) {
      localStorage.setItem("i18n_locale", value);
    },
  },
};
