<template>
  <div>
    <button @click="logout">Se déconnecter</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>


    <div class="grid-container">

      <v-card v-for="item in eventname" :key="item.eventid"
       min-height="300"
       max-width="200"
       class=""
       elevation="2"
      >
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>01/01/1970 - {{ item.attendance }}</v-card-subtitle>
        <v-card-text>Does everybody know that pig named Lorem Ipsum ? Some people have an ability to write placeholder text…</v-card-text>



      </v-card>






    </div>







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
      this.$router.push('/login');
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
</style>
