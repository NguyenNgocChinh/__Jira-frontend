<template>
  <a-card class="drop-shadow-xl w-6/12">
    <span class="block text-sm font-medium text-gray-500">{{ $t('Must be login') }}</span>
    <div class="pt-7"></div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: $t('errors.username.required') }] },
        ]"
          :placeholder="$t('Username')"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item has-feedback :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: $t('errors.password.required') }] },
        ]"
          type="password"
          :placeholder="$t('Password')"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-button class="capitalize" type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
          {{ $t('login') }}
        </a-button>
        <NuxtLink class="ml-2" to="/">{{ $t("loginPage.notLogin") }}</NuxtLink>
      </a-form-item>

    </a-form>
  </a-card>
</template>

<script>

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  layout: 'auth',
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: 'horizontal_login'}),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

