<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>
    <h2>{{ this.eventname }}</h2>
    <ul id="eventlist">

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
      eventid : null,
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

        let toto = document.getElementById('eventlist');


        for (let i = 0; i <= res.data.length; i++){

          toto.innerHTML += '<li>' + res.data[i].name + '</li>'
        }


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
