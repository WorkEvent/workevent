<template>

  <div>
      
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <button class="login-button-click" @click="profile">Mon profil</button>
          <button class="login-button-click" @click="logout">Se déconnecter</button>
        </div>
      </div>
    </div>

    <h2 class="text-center mt-5">Echangez vos points pour des récompenses</h2>

    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/carte-cadeau.png">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Carte cadeau - 100€</h3>
            <div>Carte cadeau dans votre magasin préféré pour une valeur de 100€.</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">500 points</button>
            </div>
        </div>
    </div>

    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/chocolat.jpg">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Coffret chocolat - 500g</h3>
            <div>Coffre chocolat 500g de votre choix</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">350 points</button>
            </div>
        </div>
    </div>

    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/asterix.jpg">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Billet Parc Astérix</h3>
            <div>1 jour au parc Astérix avec une formule midi offerte</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">450 points</button>
            </div>
        </div>
    </div>

    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/disney.jpg">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Billet Parc Disneyland</h3>
            <div>1 jour au parc Disneyland Paris</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">450 points</button>
            </div>
        </div>
    </div>

    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/wonderbox-duo.jpg">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Wonderbox Duo</h3>
            <div>Nuit insolite pour 2 personnes</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">650 points</button>
            </div>
        </div>
    </div>

<div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src="../assets/jbl.jpg">
                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Enceinte Bluetooth</h3>
            <div>Enceinte Bluetooth de votre choix pour une valeur max de 130€</div>
            <div class="col-6 text-center vote-button-section">
                <button class="w-100 mx-auto mb-3 vote-btn">550 points</button>
            </div>
        </div>
    </div>
    
</div>
    
</template>

<script>
import axios from 'axios';
export default {
  name: 'Shop',
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


body {
  text-align: center;
  padding: 30px;
  background: #f8f4f2;
  font-family: Arial;
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

.a-box {
  display: inline-block;
  width: 300px;
  text-align: center;
  padding: 20px;
}

.img-container {
    height: 250px;
    width: 230px;
    overflow: hidden;
    /* border-radius: 0px 0px 20px 20px; */
    display: inline-block;
}

.img-container img {
    /* transform: skew(0deg, -13deg); */
    height: 250px;
    /* margin: -20px 0px 0px -30px; */
}

.inner-skew {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    /* transform: skew(0deg, 13deg); */
    font-size: 0px;
    /* margin: 10px 0px 0px 0px; */
    background: #c8c2c2;
    height: 250px;
    width: 200px;
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
}

.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: #04bcff;
  font-size: 18px;
}


</style>
