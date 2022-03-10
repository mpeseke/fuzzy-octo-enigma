<template>
    <div>
        <h1>{{ user.title }}</h1>
    </div>
</template>
<script>
import axios from "axios";



export default {
    created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/2").then((result) => {
        this.user = result.data;
        console.log(this.user);
    })
  },
  data() {
      return {
          user: {},
      }
  }
}
</script>
<style lang="">
    
</style>