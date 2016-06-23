const ArticleConfig = $stateProvider => {
  "ngInject";

  $stateProvider.state("app.article", {
    url: "/article/:slug",
    controller: "ArticleCtrl",
    controllerAs: "$ctrl",
    templateUrl: "article/article.html",
    title: "Article",
    resolve: {
      article: (Articles, $state, $stateParams) => {
        return Articles.get($stateParams.slug)
          .then(article => article)
          .catch(err => $state.go("home.app"));
      }
    }
  });

};

export default ArticleConfig;
