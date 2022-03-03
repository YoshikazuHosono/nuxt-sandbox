<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-divider />
      <v-list>
        <!-- v-if="isPermit(item.privilage)" -->
        <template v-for="(item, i) in items" :to="item.to">
          <v-list-item :to="item.to" v-if="isPermit(item.privilage)">
            <v-list-item-content>
              <v-list-item-title> {{ item.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
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
import { get } from "vuex-pathify";

export default {
  data() {
    return {
      title: "Hosono.js",
      drawer: false,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.commit("logout");
    },
    isPermit(privilage) {
      if (privilage === "anyone") {
        return true;
      } else if (privilage === "general") {
        return this.$store.state.isLogin == true;
      }
      return false;
    },
  },
  computed: {
    items: get("app/menuItems"),
  },
};
</script>
