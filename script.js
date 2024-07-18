function newsApp() {
  return {
    API_KEY: "ec55232294c34f4088c2299cef551291",
    url: "https://newsapi.org/v2/everything?q=",
    articles: [],
    query: "",
    loading: false,
    fetchNews(query) {
      // fetches the news via api
      this.loading = true;
      const apiUrl = `${this.url}${query}&apiKey=${this.API_KEY}`;
      console.log("API URL:", apiUrl); // Log the API URL
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          this.articles = data.articles.filter((article) => article.urlToImage);
        })
        .catch((error) => {
          console.error("Error fetching news:", error); // Log any fetch errors
        })
        .finally(() => {
          this.loading = false;
        });
    },
    searchNews() {
      // filters the news from api on the basis of user's input
      if (this.query.trim() !== "") {
        this.fetchNews(this.query);
      }
    },
    openArticle(url) {
      // for opening the full news in a new tab
      window.open(url, "_blank");
    },
  };
}
window.newsApp = newsApp;
