
class ArticleActionsCtrl {

  constructor(User, Articles, $state) {
    "ngInject";

    this._Articles = Articles;
    this._User = User;
    this._$state = $state;

    if (User.current) {
      this.canModify = (User.current.username === this.article.author.username);
    } else {
      this.canModify = false;
    }
  };

  deleteArticle() {
    this.isDeleting = true;
    this._Articles.destroy(this.article.slug)
      .then(success => this._$state.go("app.home"))
      .catch(err => this._$state.go("app.home"));
  };

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go("app.register");
      return;
    }

    if (this.article.favorited) {
      this._Articles.unfavorite(this.article.slug)
        .then(() => {
          this.isSubmitting = false;
          this.article.favorited = false;
          this.article.favoritesCount--;
        });
    } else {
      this._Articles.favorite(this.article.slug)
      .then(() => {
          this.isSubmitting = false;
          this.article.favorited = true;
          this.article.favoritesCount++;
        });
    }
  };

};

const ArticleActions = {
  bindings: {article: "="},
  controller: ArticleActionsCtrl,
  templateUrl: "article/article-actions.html"
};

export default ArticleActions;
