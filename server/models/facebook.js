const FB = require('fb');

class Facebook{
  static getUserData(token){
    return new Promise((resolve, reject) => {
      var fb = new FB.Facebook({
        accessToken: token,
        appId: 356338638145953,
        appSecret: '6567697f0e7d17e0be3c4e4066ad09e6'
      })

      fb.api('/me', {fields: ['id', 'name', 'birthday'], access_token: req.body.token }, function (me) {
        const user = {
          fbId: me.id,
          name: me.name
        }
        resolve(user);
      });
    });
  }
}

module.exports = Facebook;
