
const ProfileConfig = $stateProvider => {
  "ngInject";

  $stateProvider.state("app.profile", {
    abstract: true,
    url: "/@:username",
    controller: "ProfileCtrl",
    controllerAs: "$ctrl",
    templateUrl: "profile/profile.html",
    resolve: {
      profile: (Profile, $state, $stateParams) => {
        return Profile.get($stateParams.username)
          .then(profile => profile)
          .catch(err => $state.go("app.home"));
      }
    }
  });

  $stateProvider.state("app.profile.main", {
    url:"",
    controller: "ProfileArticlesCtrl",
    controllerAs: "$ctrl",
    templateUrl: "profile/profile-articles.html",
    title: "Profile"
  });

  $stateProvider.state("app.profile.favorites", {
    url:"/favorites",
    controller: "ProfileArticlesCtrl",
    controllerAs: "$ctrl",
    templateUrl: "profile/profile-articles.html",
    title: "Favorites"
  });
};

export default ProfileConfig;
