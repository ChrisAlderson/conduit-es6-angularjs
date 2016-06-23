import angular from "angular";
import ArticlesService from "./articles.service";
import CommentsService from "./comments.service";
import JwtService from "./jwt.service";
import ProfileService from "./profile.service";
import TagsService from "./tags.service";
import UserService from "./user.service";

const servicesModule = angular.module("app.services", []);

servicesModule.service("Articles", ArticlesService);
servicesModule.service("Comments", CommentsService);
servicesModule.service("JWT", JwtService);
servicesModule.service("Profile", ProfileService);
servicesModule.service("Tags", TagsService);
servicesModule.service("User", UserService);

export default servicesModule;
