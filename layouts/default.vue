<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-divider />
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> TEST </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-if="!$store.state.isLogin" @click="login">LOGIN</v-btn>
      <v-btn v-else @click="logout">LOGOUT</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Hosono.js",
      drawer: false,
    };
  },
  methods: {
    login() {
      this.$store.commit("login");
    },
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
