<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Hosono Nuxtサンプルにようこそ </v-card-title>
          <v-card-text>
            <p>こちらはHosono NuxtサンプルのTopページです</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>API_URL={{ apiUrl }}</div>
      </v-col>
      <v-col>
        <div>ENV={{ env }}</div>
      </v-col>
      <v-col>
        <div>MENU={{ items }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.API_URL,
      env: process.env.ENV,
      items: this.$store.state.menuItems,
    };
  },
};
</script>
