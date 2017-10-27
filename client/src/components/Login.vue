<template lang="html">
  <div class="container-fluid bacground-style">
    <div class="container login-style">
      <h2 class="font-style-login">Welcome to Mixellany</h2>
      <button type="button" name="button" class="btn btn-primary login-fb-style" @click="testLogin"> Login facebook </button>

      <!-- <fb-signin-button
      :params="fbSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Facebook
    </fb-signin-button> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes,public_profile,publish_actions,manage_pages,publish_pages',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      console.log('--- iki response --->', response)
      // FB.api('/me', dude => {
      //   console.log(`Good to see you, ${dude.name}.`)
      // })
      console.log('mausk', response)
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      axios({
        method: 'post',
        url: 'http://35.198.214.119/user/loginFb',
        headers: {
          fbaccesstoken: localStorage.getItem('fbaccesstoken')
          // token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log('ini response dari fb client', response)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/home')
      })
      .catch((err) => {
        console.log('ini jika eroor', err)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    testLogin () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="css">
.font-style-login{
  font-family: 'Lobster', cursive;
  color: green;
}
.login-style{
  margin-top: 80px;
}
.bacground-style{
  background-image: url('../assets/gambar-admin-1.jpeg');
  height:100vh;
  width: 100%;
  text-align: center;
}
button.btn.btn-primary.login-fb-style {
  margin-top: 106px;
  padding: 19px 61px;
  font-size: 20px;
  border-radius: 0px;
  box-shadow: 2px 7px 21px 2px #eee;
}
</style>
