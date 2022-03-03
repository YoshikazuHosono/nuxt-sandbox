<template>
  <v-container>
    <v-card>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-card-title>ログイン画面</v-card-title>
          </v-row>
          <v-row>
            <v-card-text>
              <v-text-field v-model="form.loginId" label="ログインID">
              </v-text-field>
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text>
              <v-text-field v-model="form.password" label="パスワード">
              </v-text-field>
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text>
              <v-btn @click="login">LOGIN</v-btn>
            </v-card-text>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { get } from "vuex-pathify";

export default {
  data() {
    return {
      form: {
        loginId: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit("login");
      this.$router.push("/");
    },
  },
};
</script>
