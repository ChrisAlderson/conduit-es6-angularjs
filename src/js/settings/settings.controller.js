
class SettingsCtrl {

  constructor(User, $state) {
    "ngInject";

    this._User = User;
    this._$state = $state;

    const { email, bio, image, username } = this._User.current;
    this.formData = { email, bio, image, username };

    this.logout = this._User.logout.bind(User);
  };

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData)
      .then(user => {
        console.log(user.username);
        this._$state.go('app.profile.main', {username:user.username});
      }).catch(err => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      });
  };

};

export default SettingsCtrl;
