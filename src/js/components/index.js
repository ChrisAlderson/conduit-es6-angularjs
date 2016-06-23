import angular from "angular";
import ArticleList from './article-helpers/article-list.component';
import ArticleMeta from "./article-helpers/article-meta.component";
import ArticlePreview from './article-helpers/article-preview.component';
import Comment from "./comment.component";
import FavoriteBtn from "./buttons/favorite-btn.component";
import FollowBtn from "./buttons/follow-btn.component";
import ListErrors from "./list-errors.component";
import ListPagination from './article-helpers/list-pagination.component';
import ShowAuthed from "./show-authed.directive";


const componentsModule = angular.module("app.components", []);

componentsModule.component('articleList', ArticleList);
componentsModule.component("articleMeta", ArticleMeta);
componentsModule.component('articlePreview', ArticlePreview);
componentsModule.component("comment", Comment);
componentsModule.component("favoriteBtn", FavoriteBtn);
componentsModule.component("followBtn", FollowBtn);
componentsModule.component("listErrors", ListErrors);
componentsModule.component('listPagination', ListPagination);
componentsModule.directive("showAuthed", ShowAuthed);

export default componentsModule;
