<template>
  <div class="flex flex-center column">
    <div class="q-pa-md full-width justify-center" style="max-width: 400px">
      <h5>Login</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-xs col-9">
        <q-input
          filled
          type="email"
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Invalid Email']"
        />
        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
        />
        <div class="q-pa-md flex flex-center">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Register"
            type="submit"
            color="primary"
            outline
            @click.prevent="navigate"
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    navigate: function () {
    // Do what you want here.
      this.$router.push({
        path: 'register'
      })
    }
  }
}
</script>

<style lang="stylus" scoped></style>
