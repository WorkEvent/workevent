<template>
  <div class="container-fluid">
      <div class="row navbar">
        
      </div>
      <div class="row">
          <div class="col-12 wallpaper" ></div>
      </div>
      <div class="row">
          <div class="col-12 first-section">
              <div class="first-text">
                  <div class="col-6" style="margin: auto">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>            
    </div>
    <div class="buttons col-6">
         <button class="button-click" @click="clickLogin">Connexion</button>
          <button class="button-click" @click="clickLogin">Inscription</button>
           <button class="button-click" @click="clickLogin">Évènements</button>
    </div>

          </div>
      </div>
      
        <div class="row">
     <div class="col-9 info-section">
         <div class="col-6 info-text">
            <p class="h3 info-t text-center pt-2">Qui sommes-nous</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
      <div class="col-3 right-login">
        <img src="../assets/WORK EVENT_BLANC.png" alt="logo" class="logo-img w-50">
      </div>
    </div>
          <div class="row">
          <div class="col-12 third-section">
              <div class="col-4 block-text">
                  <h1>Notre éthique</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             <div class="col-4 block-text">
                  <h1>Nos Objectifs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             <div class="col-4 block-text">
                  <h1>Nos Valeurs</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
      </div>
        <div class="row">
      <div class="col-12" style="padding: 0px;">
        <div class="col-12 footer-section">
            <div class="col-12 footer-links">
            <ul class="footer-text">
                <li><a class="footer-links" href="">Mentions Légales</a></li>
                <li><a class="footer-links" href="">Partenariat</a></li>
                <li><a class="footer-links" href="">CGU</a></li>
                <li><a class="footer-links" href="">Contact</a></li>
            </ul>
            </div>
                    <p style="text-align: center">Workevent © 2022</p>

        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

template {
   margin: 0;
}

.wallpaper{
    height: 70vh;
    background-image: url(../assets/PH_hero1.png);
}

.navbar {
  background-color: #1e1e1e;
  height: 5vh;
}

.first-section {
  height: 50vh;
  
}

.first-text {
    height: 25vh;
    margin-top: 5vh;
    font-family: Roboto,sans-serif;
}

.info-title {
    margin: auto;
    font-family: Roboto,sans-serif;
}

.third-section {
  height: 50vh;
}

.buttons {
    height: 12.5vh;
    margin: auto;
    display: flex;
}

.button-click {

  padding: 1.5%;
  margin: auto;
  font-family: Roboto,sans-serif;
  color: white ;
  font-weight: bold;
  background-color: rgba(255,193,59,1);
  border-radius: 5px;
}

.block-text {
    padding: 5%;
    display: inline-block;
    font-family: Roboto,sans-serif;
}

.info-section {
  height: 50vh;
  margin: auto;
  background-color: #F5F0E1;
}

.info-text {
 margin: 5%;
 margin-left: auto;
 margin-right: auto;
}


.footer-section {
  height: 25vh;
  margin: 0;
  background-color: #1e1e1e;
  color: rgba(239,239,239,1);
  font-size: 1.5h;
}

.info-text {

  font-family: Roboto,sans-serif;

}

.footer-text {
     font-size: 2vh;
    margin-top: 5vh;
    text-align: center;
    list-style: none;
}

.footer-text li {
    display: inline;
    margin: 2vw;
}

.footer-links {
  font-family: Roboto,sans-serif;
  color: rgba(239,239,239,1);
  text-decoration: none;
}

.right-login {
  background-color: #F5F0E1;
  height:50vh;
}

.logo-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
}

</style>
