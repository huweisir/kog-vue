<template>
   <div class="cotn_principal">
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
  <div class="cont_centrar">
    <div class="cont_login">
      <div class="cont_info_log_sign_up">
        <div class="col_md_login">
          <div class="cont_ba_opcitiy">
            <h2>LOGIN</h2>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <button class="btn_login" @click="cambiar_login()">LOGIN</button>
          </div>
        </div>
        <div class="col_md_sign_up">
          <div class="cont_ba_opcitiy">
            <h2>SIGN UP</h2>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <button class="btn_sign_up" @click="cambiar_sign_up()">SIGN UP</button>
          </div>
        </div>
      </div>
      <div class="cont_back_info">
        <div class="cont_img_back_grey"> <img src="../../assets/po.jpg" alt="" /> </div>
      </div>
      <div class="cont_forms" :class="{cont_forms_active_login:onLogin,cont_forms_active_sign_up:onSignUp}" >
        <div class="cont_img_back_"> <img src="../../assets/po.jpg" alt="" /> </div>
        <div class="cont_form_login" :style="login.style"> <a href="javascript:void(0);" @click="ocultar_login_sign_up()" ><i class="material-icons">&#xE5C4;</i></a>
          <h2>LOGIN</h2>
          <input type="text" placeholder="Name/Email" v-model="login.data.username" />
          <input type="password" placeholder="Password" v-model="login.data.password" />
          <button class="btn_login" @click="cambiar_login_submit()">LOGIN</button>
        </div>
        <div class="cont_form_sign_up" :style="signUp.style"> <a href="javascript:void(0);" @click="ocultar_login_sign_up()"><i class="material-icons">&#xE5C4;</i></a>
          <h2>SIGN UP</h2>
          <input type="text" placeholder="Email"v-model="signUp.data.email" />
          <input type="text" placeholder="User" v-model="signUp.data.username" />
          <input type="password" placeholder="Password" v-model="signUp.data.password"/>
          <input type="password" placeholder="Confirm Password" v-model="signUp.data.password"/>
          <button class="btn_sign_up" @click="cambiar_sign_up_submit()">SIGN UP</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
// import {userInfo} from '../../interface/login.ts';
export default Vue.extend({
  data() {
    return {
      signUp: {
        style: { opacity: "0", display: "none" },
        data:{ 
          username:'',
          email:'',
          password:""
        },
        repeatPassWord:""
      },
      login:{
        style: { opacity: "0", display: "none" },
        data:{
          username:'',
          email:'',
          password:""
        }
      },
      onLogin: false,
      onSignUp: false
    };
  },
  async created() {
    let user=await this.ajax.get(`/user/getuserinfo`);
    console.log(user);
    this.pl();
  },
  methods: {
    //点击登录-跳出弹窗动作
    cambiar_login() {
      this.signUp.style.display = "none";
      this.login.style.display = "block";
      this.onLogin = true;
      this.onSignUp = false;
      let timer1 = setTimeout(() => {
        this.signUp.style.opacity = "0";
        clearTimeout(timer1);
      }, 400);
      let timer2 = setTimeout(() => {
        this.login.style.opacity = "1";
        clearTimeout(timer2);
      }, 200);
    },
    //点击提交的动作
    cambiar_login_submit() {},
    //点击注册-跳出弹窗动作
    cambiar_sign_up() {
      this.signUp.style.display = "block";
      this.login.style.display = "none";
      this.onLogin = false;
      this.onSignUp = true;
      let timer1 = setTimeout(() => {
        this.signUp.style.opacity = "1";
        clearTimeout(timer1);
      }, 400);
      let timer2 = setTimeout(() => {
        this.login.style.opacity = "0";
        clearTimeout(timer2);
      }, 100);
    },
    //点击注册-跳出弹窗动作
    async cambiar_sign_up_submit() {
      console.log(this.signUp.data.username)
      let params:userInfo={...this.signUp.data};
      this.ajax.post(`/user/addUserInfo`,params);
    },
    ocultar_login_sign_up() {
      this.onLogin = false;
      this.onSignUp = false;
      this.signUp.style.opacity = "0";
      this.login.style.opacity = "0";
      let timer1 = setTimeout(() => {
        this.signUp.style.display = "none";
        this.login.style.display = "none";
        clearTimeout(timer1);
      }, 500);
    }
  }
});
</script>


<style lang="scss" scoped>
* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: "Lato", sans-serif;
}

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.cotn_principal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfd8dc+0,607d8b+100,b0bec5+100 */
  background: #aac4bc; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #aac4bc 0%,
    #eca8a8 100%,
    #eed5a9 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.cont_centrar {
  position: relative;
  float: left;
  width: 100%;
}

.cont_login {
  position: relative;
  width: 640px;
  left: 50%;
  margin-left: -320px;
}

.cont_back_info {
  position: relative;
  float: left;
  width: 640px;
  height: 280px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.cont_forms {
  position: absolute;
  overflow: hidden;
  top: 100px;
  left: 0px;
  width: 320px;
  height: 280px;
  background-color: #eee;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_login {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 0px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.cont_forms_active_sign_up {
  box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  height: 420px;
  top: 20px;
  left: 320px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  .cont_img_back_ {
    top: 0px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .cont_img_back_ {
    top: 0px;
    left: -435px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
}

.cont_img_back_grey {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
  img {
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.2;
    animation-name: animar_fondo;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}

.cont_img_back_ {
  position: absolute;
  width: 950px;
  top: -80px;
  left: -116px;
  img {
    width: 100%;
    opacity: 0.3;
    animation-name: animar_fondo;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}

.cont_info_log_sign_up {
  position: absolute;
  width: 640px;
  height: 280px;
  top: 100px;
  z-index: 1;
}

.col_md_login {
  position: relative;
  float: left;
  width: 50%;
}

.col_md_login > h2 {
  font-weight: 400;
  margin-top: 70px;
  color: #757575;
}

.col_md_login > p {
  font-weight: 400;
  margin-top: 15px;
  width: 80%;
  color: #37474f;
}

.btn_login {
  background-color: #ff9800;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}

.col_md_sign_up {
  position: relative;
  float: left;
  width: 50%;
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
  font-weight: 400;
  margin-top: 15px;
  color: #fff;
}
/* ----------------------------------
background text    
------------------------------------
 */
.cont_ba_opcitiy {
  position: relative;
  background-color: rgba(187, 168, 170, 0.79);
  width: 80%;
  border-radius: 3px;
  margin-top: 60px;
  padding: 15px 0px;
}

.btn_sign_up {
  background-color: #f44336;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius: 3px;
  box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.cont_forms_active_sign_up {
  z-index: 2;
}

@-webkit-keyframes animar_fondo {
  from {
    -webkit-transform: scale(1) translate(0px);
    -moz-transform: scale(1) translate(0px);
    -ms-transform: scale(1) translate(0px);
    -o-transform: scale(1) translate(0px);
    transform: scale(1) translate(0px);
  }
  to {
    -webkit-transform: scale(1.5) translate(50px);
    -moz-transform: scale(1.5) translate(50px);
    -ms-transform: scale(1.5) translate(50px);
    -o-transform: scale(1.5) translate(50px);
    transform: scale(1.5) translate(50px);
  }
}
@-o-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@-moz-keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
@keyframes identifier {
  from {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  to {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
  }
}
.cont_form_login {
}

.cont_forms_active_login {
  z-index: 2;
  .cont_form_login {
    position: absolute;
    opacity: 0;
    display: none;
    width: 320px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    & > input {
      padding: 15px 5px;
      margin-left: 10px;
      margin-top: 20px;
      width: 260px;
      border: none;
      text-align: left;
      color: #757575;
    }
    h2 {
      margin-top: 110px;
      font-weight: 400;
      color: #757575;
    }
  }
}

.cont_form_sign_up {
  position: absolute;
  width: 320px;
  float: left;
  opacity: 0;
  display: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  & > input {
    text-align: left;
    padding: 15px 5px;
    margin-left: 10px;
    margin-top: 20px;
    width: 260px;
    border: none;
    color: #757575;
  }
  & > h2 {
    margin-top: 50px;
    font-weight: 400;
    color: #757575;
  }
}

.cont_form_login .cont_form_login > h2 {
  margin-top: 110px;
  font-weight: 400;
  color: #757575;
}
.cont_form_login > a,
.cont_form_sign_up > a {
  color: #757575;
  position: relative;
  float: left;
  margin: 10px;
  margin-left: 30px;
}
</style>

