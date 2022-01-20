<template>

    <div class="container-fluid">
      <div class="row">
        <div class="form-event col-6 mt-5">
          <div class="login-title">
            <p class="h5 login-text text-center pt-2">Ajouter un évènement</p>
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Nom de l'évènement :</p> <input class="w-100 input-area" type="text" v-model="name">
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Nombre de participants max : </p> <input class="w-100 input-area" type="text" v-model="attendance">
          </div>

          <div class="input-mail col-12 pt-2">
            <p>type d'évènement</p> <input class="w-100 input-area" type="text" v-model="type">
          </div>

          <div class="input-mail col-12 pt-2">
            <p>Horaire </p> <input class="w-100 input-area" type="text" v-model="time">
          </div>
          <div class="input-mail col-12 pt-2">
            <p>Date : </p> <input class="w-100 input-area" type="text" v-model="eventdate" placeholder="AAAA-MM-JJ">
          </div>

          <div class="input-mail col-12 pt-2">
            <p>Illustration</p> <input class="w-100 input-area" type="text" v-model="picture">
        </div>

          <div class="login-button col-12  mx-auto w-25 pt-4">
            <button class="w-100 login-button-click" @click="newEvent">Add Event</button>
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

      eventid : Math.floor((Math.random() * 10) + 1),
      name : '',
      attendance : '',
      type : '',
      time : '',
      eventdate : '',
      picture : '',
    }
  },
  methods: {
    newEvent() {
      let newEvent = {
        eventid : this.eventid,
        name : this.name,
        attendance : parseInt(this.attendance),
        type : this.type,
        time : this.time,
        eventdate : this.eventdate,
        picture : this.picture,
      }
      axios.post('http://localhost:5000/newevent', newEvent)
          .then(res => {
            console.log(res)
            this.error = '';
            this.$router.push('/vote');
          }, err => {
            console.log(err.response)
            this.error = err.response.data.error
          })
    },

  }
}



</script>


<style scoped>
* {
  font-family: "Roboto", sans-serif;
}

.form-event {
  margin-left: auto;
  margin-right: auto;
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

  width: 10%;
  float: left;
}

</style>

