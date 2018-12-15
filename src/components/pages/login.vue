<template>
  <div class="login">
    <div class="loginHeader">
      User Login
    </div>

    <div class="loginContainer">
      <table>

        <tr>
          <td>Username</td>
          <td>:</td>
          <td><input type="text" placeholder="Username" v-model="user.username"></td>
        </tr>

        <tr>
          <td>Password</td>
          <td>:</td>
          <td><input type="password" placeholder="Password" v-model="user.password"></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td><button class="addBtn" @click="loginNow()">Login</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        username:"",
        password:""
      }
    }
  },
  methods:{
      loginNow(){
        console.log('loginNow() is runned');
        console.log('this.user');
        console.log(this.user);

        this.$eventBus.$emit('loadingStatus',true);

          this.$axios.post('https://reqres.in/api/login',this.user)
            .then(res=>{
              this.$eventBus.$emit('loadingStatus',false);
                //console.log(res);

              if(res.data.error){
                  //alert(res.data.message);
                  this.$iziToast.error({
                    title: 'Error',
                    message: res.data.message,
                  });
              } else{

                console.log(res.data);
                //alert(res.data)
                this.$iziToast.success({
                  title: 'OK',
                  message: res.data,
                });
                localStorage.setItem('token',res.data.token);
                  this.$router.push({name:'admin'});
              }

            });
      }
  }
}
</script>


