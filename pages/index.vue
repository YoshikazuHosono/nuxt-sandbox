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
        <v-icon>mdi-nintendo-switch</v-icon>
        <div>API_URL={{ apiUrl }}</div>
      </v-col>
      <v-col>
        <v-icon>mdi-clipboard-text</v-icon>
        <div>ENV={{ env }}</div>
      </v-col>
      <v-col>
        <v-icon>mdi-account</v-icon>
        <div>LOGIN={{ $store.state.isLogin }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>TEST ARTICLES</div>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <a :href="post.url" target="_blank" rel="noopener noreferrer">{{
              post.title
            }}</a>
          </li>
        </ul>
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
      posts: {},
    };
  },
  async mounted() {
    const url = "https://qiita.com/api/v2/items";
    const response = await this.$axios.$get(url);
    this.posts = response;
  },
};
</script>
