import angular from "angular";
import HomeConfig from "./home.config";
import HomeCtrl from "./home.controller";

const homeModule = angular.module("app.home", []);

homeModule.config(HomeConfig);
homeModule.controller("HomeCtrl", HomeCtrl);

export default homeModule;
