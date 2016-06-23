
class ProfileArticlesCtrl {

  constructor(profile, $state, $rootScope) {
    "ngInject";

    this.profile = profile;

    this.profileState = $state.current.name.replace("app.profile.", "");
    this.listConfig = { type: "all" };

    if (this.profileState === "main") {
      this.listConfig.filters = {author: this.profile.username};
      $rootScope.setPageTitle("@" + this.profile.username);
    } else if (this.profileState === "favorites") {
      this.listConfig.filters = {favorited: this.profile.username};
      $rootScope.setPageTitle(`Articles favorited by ${this.profile.username}`);
    }
  };

};

export default ProfileArticlesCtrl;
