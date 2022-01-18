<template>

<div>

  <p class="h2 text-center mt-5">Ajouter un évènement </p>

      <v-form ref="form">
        <v-container
        >
          <v-row
              no-gutters
          >
            <v-col class="col-3"
                   no-gutters
            >
              <img alt="society event"  class="society-event w-75 d-block" src="https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5XUY3OGMSJOPU4WV6NDHKL7BYA.jpg">
            </v-col>
            <v-col
                class="col-6 mx-auto"
            >
              <v-text-field
                  v-model="name"
                  label="Nom de l'événèment"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="attendance"
                  label="Nombre de personnes max"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="type"
                  label="Type d'activité"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="time"
                  label="Horaire"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="picture"
                  label="Illustration"
                  required
              ></v-text-field>


              <button class="mt-3" @click="newEvent">Organiser l'évènement</button>
            </v-col>
            <v-col class="col-3"
                   no-gutters
            >
              <img alt="societyevent"  class="society-event w-75 d-block" src="https://arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5XUY3OGMSJOPU4WV6NDHKL7BYA.jpg">
            </v-col>
          </v-row>

        </v-container>

      </v-form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewEvent",
  data() {
    return {
      eventid :  Math.floor((Math.random() * 10) + 1),
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
        eventid : this.eventid,
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
            this.$router.push('/vote');
          }, err => {
            console.log(err.response)
            this.error = err.response.data.error
          })
    },

  }
}

/* TO DO :

  - Ajouter un champ Date

 */

</script>

<style scoped>
.society-event {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50%;

}

body, html {
  font-family: Roboto,sans-serif;

}


button {
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
  width: 40%;
  display:  block;
  margin-left: auto;
  margin-right: auto;
}

button:hover {
  color: black;
  transition: 0.5s ease;
}
</style>

