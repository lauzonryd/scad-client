<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          SCAD
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Welcome, ~name here~</q-item-label>
        <q-item @click="navigate('dashboard')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="navigate('league-home')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>League Home</q-item-label>
            <q-item-label caption>~League Name~</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="navigate('my-team')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>My Team</q-item-label>
            <q-item-label caption> ~Team Name~</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="navigate('matchup')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Matchups</q-item-label>
            <q-item-label caption>~Your Team vs Opponent~</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="navigate('free-agents')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Free Agents</q-item-label>
            <q-item-label caption>Free Agents</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click="navigate('league-settings')" tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="settings_applications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Leage Settings</q-item-label>
            <q-item-label caption>League Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: true
    }
  },
  methods: {
    navigate: function (nav) {
    // Do what you want here.
      console.log('in MyLayout navigate')
      this.$router.push({
        path: nav
      })
    }
  }

}
</script>
