<template>

    <div class="createUser">
        <h1>{{count}}</h1>
        <input type="number" v-model="count" />
        
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: "CreateUser",
    setup() {
        const count = ref(0);

        return {
            count
        }
    }
}
</script>
<style>
    
</style>