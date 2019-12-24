<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          link
          :key="i"
          class="links"
          :to="{ name: route.name }"
          v-for="(route, i) in routes"
        >
          <v-list-item-action>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Posto</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout()" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>Projeto Posto &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    ...mapActions('auth', ['ActionLogout']),
    async logout () {
      try {
        await this.ActionLogout()
        this.$router.push({ name: 'login' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .links:hover {
    text-decoration: none;
  }
</style>
