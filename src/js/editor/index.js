import angular from "angular";
import EditorConfig from "./editor.config";
import EditorCtrl from "./editor.controller";

const editorModule = angular.module("app.editor", []);

editorModule.config(EditorConfig);
editorModule.controller("EditorCtrl", EditorCtrl);

export default editorModule;
