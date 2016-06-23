import angular from "angular";
import ProfileConfig from "./profile.config";
import ProfileCtrl from "./profile.controller";
import ProfileArticlesCtrl from "./profile-articles.controller";

const profileModule = angular.module("app.profile", []);

profileModule.config(ProfileConfig);
profileModule.controller("ProfileCtrl", ProfileCtrl);
profileModule.controller("ProfileArticlesCtrl", ProfileArticlesCtrl);

export default profileModule;
