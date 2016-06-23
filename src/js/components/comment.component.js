
class CommentCtrl {

  constructor(User) {
    "ngInject";

    if (User.current) {
      this.canModify = (User.current.username === this.data.author.username);
    } else {
      this.canModify = false;
    }
  };

};

const ListErrors = {
  bindings: {
    data: "=",
    deleteCb: "&"
  },
  controller: CommentCtrl,
  templateUrl: "components/comment.html"
};

export default ListErrors;
