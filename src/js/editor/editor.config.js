
const EditorConfig = $stateProvider => {
  
  "ngInject";

  $stateProvider.state("app.editor", {
    url: "/editor",
    controller: "EditorCtrl",
    controllerAs: "$ctrl",
    templateUrl: "editor/editor.html",
    title: "Editor",
    resolve: {
      auth: User => User.ensureAuthIs(true),
      article: (Articles, User, $state, $stateParams) => {
        if($stateParams.slug) {
          return Articles.get($stateParams.slug)
            .then(article => {
              if (User.current.username === article.author.username) {
                return article;
              } else {
                $state.go("app.home")
              }
            }).catch(err => $state.go("app.home"));
        } else {
          return null;
        }
      }
    }
  });

};

export default EditorConfig;
