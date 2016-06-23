class ArticleListCtrl {

  constructor(Articles, $scope) {
    "ngInject";

    this._Articles = Articles;
    this.setListTo(this.listConfig);

    $scope.$on("setPageTo", (ev, pageNumber) => this.setPageTo(pageNumber));
    $scope.$on("setListTo", (ev, newList) => this.setListTo(newList));
  };

  setListTo(newList) {
    this.list = [];
    this.listConfig = newList;
    this.runQuery();
  };

  setPageTo(pageNumber) {
    this.listConfig.currentPage = pageNumber;
    this.runQuery();
  };

  runQuery() {
    this.loading = true;

    const queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    if (!this.listConfig.currentPage) this.listConfig.currentPage = 1;

    queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));
    queryConfig.filters.limit = this.limit;

    this._Articles.query(queryConfig)
      .then(res => {
        this.loading = false;
        this.list = res.articles;
        this.listConfig.totalPages = Math.ceil(res.articlesCount / this.limit);
      });
  };

};

const ArticleList = {
  bindings: {
    limit: "=",
    listConfig: "="
  },
  controller: ArticleListCtrl,
  templateUrl: "components/article-helpers/article-list.html"
};

export default ArticleList;
