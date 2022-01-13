<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 left-login mt-5">

        <div class="col-8 login-section">
          <div class="login-title">
            <p class="h5 login-text text-center pt-2">Inscription</p>
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Nom :</p> <input class="w-100 input-area" type="text" v-model="name">
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Email :</p> <input class="w-100 input-area" type="text" v-model="email">
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Mot de passe :</p> <input class="w-100 input-area" type="password" v-model="password">
          </div>
          <div class="login-button col-12 ml-5 w-100 pt-4">
            <button class="w-100 login-button-click" @click="signup">Inscription</button>
          </div>
          <div class="login-button col-12 ml-5 w-100 pt-4">
            <button class="w-100 login-button-click" @click="clickLogin">Connexion</button>
          </div>
        </div>




      </div>
      <div class="col-6 right-login">
        <img src="../assets/WORK EVENT_BLANC.png" alt="logo" class="logo-img w-50">


      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/signup', newUser)
          .then(res => {
            console.log(res)
            this.error = '';
            this.$router.push('/login');
          }, err => {
            console.log(err.response)
            this.error = err.response.data.error
          })
    },
    clickLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

.login-section {
  height: 50vh;
  margin: 25% auto auto;
}

.login-text {

  font-family: Roboto,sans-serif;

}

.input-area {
  font-family: Roboto,sans-serif;
  background-color: rgba(239,239,239,1);
  border-radius: 5px;
  border-color: rgba(133,133,133,1);

}

.input-mail {

  font-family: Roboto,sans-serif;
  font-weight: bold;
}

.login-button-click {
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
}



.right-login {
  background-color: #F5F0E1;
  height:100vh;
}

.logo-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
}

</style>
