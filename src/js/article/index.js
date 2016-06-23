import angular from "angular";
import ArticleActions from "./article-actions.component";
import ArticleConfig from "./article.config";
import ArticleCtrl from "./article.controller";

const articleModule = angular.module("app.article", []);

articleModule.config(ArticleConfig);
articleModule.controller("ArticleCtrl", ArticleCtrl);
articleModule.component("articleActions", ArticleActions);


export default articleModule;
