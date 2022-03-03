<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-if="!$store.state.isLogin" @click="login">LOGIN</v-btn>
      <v-btn v-if="$store.state.isLogin" @click="logout">LOGOUT</v-btn>
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
