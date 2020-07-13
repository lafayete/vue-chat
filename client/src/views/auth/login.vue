<template>
  <div class="wrapper">
    <img src="../../assets/logo.png" class="vue_logo">
    <h2>欢迎使用Vue-Chat</h2>

    <div class="item">
        <img src="../../assets/phone.png" class="icon"/>
        <input v-model="phone" />
    </div>

    <div class="item">
        <img src="../../assets/password.png" class="icon" />
        <input v-model="password" />
    </div>

    <div class="login" @click="register">登陆</div>

    <p>尚未注册，去注册</p>

  </div>
</template>

<script>

import { Toast } from 'mint-ui';


export default {
  name: 'HelloWorld',
  data () {
    return {
        phone: '',
        password: '',
    }
  },

  mounted() {
  },

  methods: {

    register() {


    }
  }

}
</script>

<style scoped>


    .wrapper {
    
        display: flex;

        flex-direction:column;

        align-items: center;
    
    }

    .vue_logo {
    
        width: 120px;

        height: 120px;

    }

    .icon {
        width: 22px;

        height: 22px;
    
        margin-right: 10px;
    
    }

    .register {
    
        width: 250px;

        height: 50px;

        line-height: 50px;

        color: #fff;

        background: #3CB371;

        margin-top: 50px;
    
    }

    .item {

      display: flex;

      align-items: center;

      margin-top: 10px;

    }


</style>
