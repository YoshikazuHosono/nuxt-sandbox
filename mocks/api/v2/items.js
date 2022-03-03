const articles = [
  { title: "MOCK_ARTICLE_TITLE1", url: "http://MOCK_ARTICLE_TITLE1" },
  { title: "MOCK_ARTICLE_TITLE2", url: "http://MOCK_ARTICLE_TITLE2" },
  { title: "MOCK_ARTICLE_TITLE3", url: "http://MOCK_ARTICLE_TITLE3" },
  { title: "MOCK_ARTICLE_TITLE4", url: "http://MOCK_ARTICLE_TITLE4" },
  { title: "MOCK_ARTICLE_TITLE5", url: "http://MOCK_ARTICLE_TITLE5" },
  { title: "MOCK_ARTICLE_TITLE6", url: "http://MOCK_ARTICLE_TITLE6" },
  { title: "MOCK_ARTICLE_TITLE7", url: "http://MOCK_ARTICLE_TITLE7" },
  { title: "MOCK_ARTICLE_TITLE8", url: "http://MOCK_ARTICLE_TITLE8" },
  { title: "MOCK_ARTICLE_TITLE9", url: "http://MOCK_ARTICLE_TITLE9" },
];

export default {
  async get({ values }) {
    return [200, articles];
  },
};
