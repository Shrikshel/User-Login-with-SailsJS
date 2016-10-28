/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login:function (req,res,next) {
    User.findOne(req.param('id'), function foundUser(err,user) {
      if(err) return next(err);
      if(!user) return next();
      res.redirect('/user/success' + user);
    });
  },

  success:function (req,res) {
    res.view({
      user:req.param.user
    })
  }
};
