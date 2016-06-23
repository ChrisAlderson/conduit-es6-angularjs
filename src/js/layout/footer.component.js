
class AppFooterCtrl {

  constructor(AppConstants) {
    "ngInject";
    this.appName = AppConstants.appName;
    this.date = new Date();
  };

};

const AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: "layout/footer.html"
};

export default AppFooter;
