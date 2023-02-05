import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from "vee-validate";
import { required, min, email, max } from "vee-validate/dist/rules";
import vi from "vee-validate/dist/locale/vi.json";
import en from "vee-validate/dist/locale/en.json";
import moment from "moment";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

localize({
  en,
  vi,
});

extend("required", {
  ...required,
  // message: "message",
});

// is numeric with dash and dot
String.prototype.isNumeric = function () {
  return !!this.match(/^[0-9]+$/);
};
String.prototype.isPhoneNumber = function () {
  return !!this.match(/^[0-9.-]*$/);
};

extend("min", min);
extend("max", max);
extend("email", email);
extend("validateEmail", {
  ...email,
  message: i18n.$t("messages.invalid" + " email"),
});
extend("isNumber", {
  message: (field) => field + i18n.$t("messages.number"),
  validate: (value) => !!value.toString().isNumeric(),
});

extend("checkRequired", {
  ...required,
  message: (field) => field + i18n.$t("messages.required"),
});
extend("isPhoneNumber", {
  message: () => i18n.$t("messages.phoneNumber"),
  validate: (value) => !!value.toString().isPhoneNumber(),
});

extend("compareDate", {
  computesRequired: true,
  params: ["target"],
  validate(value, { target }) {
    return value <= target || value == null || target == null;
  },
  message: i18n.$t("messages.compareDate"),
});

extend("validateDate", {
  computesRequired: true,
  params: ["target"],
  validate(value, { target }) {
    if (target == null || target == "" || target == "Invalid Date") {
      return true;
    } else {
      return value <= target;
    }
  },
  message: i18n.$t("messages.inValidateDate"),
});

extend("validateTime", {
  params: ["target"],
  validate(value, { target }) {
    return value < target;
  },
  message: i18n.$t("messages.inValidateTime"),
});

extend("dateInTheFuture", {
  message: () => $("messages.dateInTheFuture"),
  validate(value) {
    var today = new Date();
    return (
      moment(value).format("YYYY-MM-DD") >= moment(today).format("YYYY-MM-DD")
    );
  },
});

extend("dateInThePast", {
  message: () => i18n.$t("messages.dateInThePast"),
  validate(value) {
    if (!value || value == "Invalid date") return true;
    var today = new Date();
    return (
      moment(value).format("YYYY-MM-DD") <= moment(today).format("YYYY-MM-DD")
    );
  },
});

extend("maxNumber", {
  computesRequired: true,
  params: ["target"],
  validate(value, { target }) {
    return !value || value?.toString().length <= target;
  },
  message: (field, item) =>
    i18n.$t("message.maxNumber", { target: item.target, field: field }),
});

extend("maxLength", {
  params: ["target"],
  validate(value, { target }) {
    return !value || value?.toString().length <= target;
  },
  message: (field, item) =>
    i18n.$t("message.maxLength", { target: item.target, field: field }),
});

extend("minNumber", {
  computesRequired: true,
  params: ["target"],
  validate(value, { target }) {
    return !value || value?.toString().length >= target;
  },
  message: (field, item) =>
    i18n.$t("message.minNumber", { target: item.target, field: field }),
});

extend("isPositiveNumber", {
  message: (field) => i18n.$t("message.positiveNumber", { field: field }),
  validate(value) {
    if (isNaN(value)) return true;
    return value > 0;
  },
});
