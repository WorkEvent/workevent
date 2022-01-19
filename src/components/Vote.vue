<template>
  <div>
    <button @click="logout">Se déconnecter</button>
    <h2>Bonjour {{ name }}</h2>
<br><br>

    <div class="grid-container">

      <ul v-for="item in eventname" :key="item.eventid">
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="344"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="250"
              :src="item.picture"
          ></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
            </v-row>

            <div class="my-4 text-subtitle-1">
              <b>{{ item.typeofevent }}</b>
            </div>

            <div>{{ item.typeofevent }} prévu pour un maximum de <b>{{ item.attendance }}</b> personnes</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>{{ item.time }}</v-card-title>

          <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
              <v-chip>{{ item.time }}</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              Voter
            </v-btn>
          </v-card-actions>
        </v-card>
      </ul>
    </div>
    <br>

    <v-btn @click="retur" class="retur" color="yellow" elevation="2"> Retour </v-btn>
      






  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Landing',
  data() {
    return {
      name: '',
      email: '',
      eventkdo : '',
      eventid : Number,
      eventname : [],
      eventattendance : undefined
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
      })


  },
  methods: {
    logout() {
      localStorage.clear();

    },
    retur(){
        this.$router.push('/');
    },
  }
}
</script>

<style scoped>


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: center;
  gap: 30px;
  column-gap: 30px;

}

.retur {
    margin-left: 48%;
}


</style>
