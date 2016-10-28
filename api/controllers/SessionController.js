/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	/**
   * `SessionController.login()`
   */

	login: function (req, res) {
    res.view();
  },


  /**
   * `SessionController.create()`
   */
  signup: function (req, res) {
    res.view()
  },


  /**
   * `SessionController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};
