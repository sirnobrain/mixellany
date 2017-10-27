const FB = require('fb');

class Facebook{
  static getUserData(token){
    return new Promise((resolve, reject) => {
      var fb = new FB.Facebook({
        accessToken: token,
        appId: 195417424336474,
        appSecret: 'b7f365d595f51d24f5ecec7d6bed0a5a'
      })

      FB.api('me', {fields: ['id', 'name', 'birthday'], access_token: req.body.token }, function (me) {
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