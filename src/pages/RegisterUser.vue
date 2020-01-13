<template>
  <div class="flex flex-center column">
    <div class="q-pa-md full-width justify-center " style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="reset" class="q-gutter-xs col-9">
        <q-input
          filled
          v-model="name"
          label="Name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
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
          :rules="[val => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(val) || 'Password must have 1 uppercase, 1 lowercase, 1 number and one special character']"
        />
        <q-input
          filled
          type="password"
          v-model="confirmPassword"
          label="Confirm Password"
          lazy-rules
          :rules="[val => val === password || 'Your passwords do not match']"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
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
    return this.initializeState()
  },
  methods: {
    onSubmit () {
    },
    initializeState () {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    accept () {

    },
    reset: function () {
      Object.assign(this.$data, this.initializeState())
    }
  }
}
</script>

<style lang="stylus" scoped></style>
