<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <button class="login-button-click" @click="profile">Mon profil</button>
          <button class="login-button-click" @click="logout">Se déconnecter</button>
        </div>
        <h2 class="text-center">Votre profil</h2>
      </div>
    </div>

    <h2 class="text-center mt-5">Voter pour le prochain évènement !</h2>

    <div class="grid-container mt-5">



      <ul v-for="item in eventname" :key="item.eventid">


          <v-card
            class="mx-auto"
            max-width="374"
        >
            <v-img
              height="250"
              :src="item.picture"
          ></v-img>

          <v-card-title class="mt-2 fw-bold h5 ">{{ item.name }} - {{ item.type }} - {{ item.time }}</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>



            <div class="text-subtitle-1 h6">
              <b>Date : {{ item.eventdate }}</b>
            </div>


            <div>{{ item.type }} prévu pour un maximum de <b>{{ item.attendance }}</b> personnes</div>
          </v-card-text>
            <div class="col-6 text-center vote-button-section">
              <button class="w-100 mx-auto mb-3 vote-btn">Add Event</button>

            </div>


        </v-card>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Vote',
  data() {
    return {
      name: '',
      email: '',
      eventkdo : '',
      eventid : Number,
      eventname : [],
      eventdate : '',
      eventattendance : Number
    }
  },
  created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
        .then(res => {
          this.name = res.data.user.name;
          this.email = res.data.user.email;
        })
    axios.get('http://localhost:5000/event')
      .then(res => {

        this.eventname = res.data
        console.log(this.eventname)
        console.log(this.eventdate)
      })


  },
  methods: {
    logout() {
      localStorage.clear();

    },
    profile(){
        this.$router.push('/myprofile');
    },
  }
}
</script>

<style scoped>


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 30px;
  column-gap: 30px;

}

.vote-btn {
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

.vote-button-section {
  margin-left: auto;
  margin-right: auto;
}

body html {
  background-color: #F5F0E1;
}
.login-button-click {
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
  width: 20%;
  margin-left: 1%;
}


</style>
