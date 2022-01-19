<template>
  <div>
    <button @click="logout">Se déconnecter</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>
    <h2>your email is: {{ society }}</h2>




    <div class="grid-container"></div>
      <v-btn @click="govote" class="vote" color="yellow" elevation="2"> Voter
      </v-btn>




    <ul v-for="item in eventname" :key="item.eventid">
      {{ item.name }}
    </ul>



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
      society : '',
      eventid : Number,
      eventname : [],
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
          this.society = res.data.user.society;
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
      this.$router.push('/login');
    },

    govote() {
      this.$router.push('/vote');
    }
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

.vote {
  width : 150px;
  margin-left: 47%;
  margin-top : 2%;
}

</style>
