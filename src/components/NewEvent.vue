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
              <p> Id : </p> <input class="w-100 input-area" type="text" v-model="eventid">
            </div>
            <div class="input-mail col-12 pt-2">
              <p>Groupe </p> <input class="w-100 input-area" type="text" v-model="attendance">
            </div>

            <div class="input-mail col-12 pt-2">
              <p>type</p> <input class="w-100 input-area" type="text" v-model="type">
            </div>

            <div class="input-mail col-12 pt-2">
              <p>horaire</p> <input class="w-100 input-area" type="text" v-model="time">
            </div>

            <div class="input-mail col-12 pt-2">
              <p>Illustration</p> <input class="w-100 input-area" type="text" v-model="picture">
            </div>


            <div class="login-button col-12 ml-5 w-100 pt-4">
              <button class="w-100 login-button-click" @click="newEvent">Add Event</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </template>

<script>
import axios from "axios";

export default {
  name: "NewEvent",
  data() {
    return {
      eventid : '',
      name : '',
      attendance : '',
      type : '',
      time : '',
      picture : '',
    }
  },
  methods: {
    newEvent() {
      let newEvent = {
        eventid : parseInt(this.eventid),
        name : this.name,
        attendance : parseInt(this.attendance),
        type : this.type,
        time : this.time,
        picture : this.picture,
      }
      axios.post('http://localhost:5000/newevent', newEvent)
          .then(res => {
            console.log(res)
            this.error = '';
            this.$router.push('/login');
          }, err => {
            console.log(err.response)
            this.error = err.response.data.error
          })
    },

  }
}
</script>

