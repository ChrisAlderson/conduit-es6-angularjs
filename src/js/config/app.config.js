import authInterceptor from "./auth.interceptor";

const AppConfig = ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) => {
  "ngInject";

  $httpProvider.interceptors.push(authInterceptor);

  $stateProvider.state("app", {
    abstract: true,
    templateUrl: "layout/app-view.html",
    resolve: {
      auth: User => User.verifyAuth()
    }
  });

  $urlRouterProvider.otherwise("/");
};

export default AppConfig;
