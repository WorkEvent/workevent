<template>
  <div>
    <button @click="logout">Se déconnecter</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>


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
