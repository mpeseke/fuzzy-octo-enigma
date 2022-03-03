<template>
  <div class="container">
    <form class="m-5 px-5" @submit="submit">
      <div class="mb-3">
        <label for="quoteAuthor" class="form-label">Quote Author</label>
        <input v-model="quoteAuthor" type="text" class="form-control" id="quoteAuthor">
      </div>
      <div class="mb-3">
        <label for="quoteBody" class="form-label">Quote</label>
        <textarea v-model="quoteBody" class="form-control" id="quoteBody"></textarea>
      </div>

      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: "CreateQuote",
  setup() {
    const quoteAuthor = ref('');
    const quoteBody = ref('');

    const submit = () => {
      console.log({
            quote_author: quoteAuthor.value,
            quote_body: quoteBody.value
          })
    }

    return {
      quoteAuthor,
      quoteBody,
      submit
    }
  }
}
</script>

<style scoped>

</style>