<template>
  <div id="app">
    <div id="loading" v-if="loading">
      <img src="/static/img/loading.gif" alt="loading">
      <p>please wait</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          loading:false
      }
  },
  created(){
     this.$eventBus.$on("loadingStatus",payload=>{
         this.loading = payload;
     });
  }
}
</script>


