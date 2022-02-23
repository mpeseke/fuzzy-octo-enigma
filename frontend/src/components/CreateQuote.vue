<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="quoteAuthor" class="form-label">Quote Author</label>
        <input type="text" class="form-control" id="quoteAuthor">
      </div>
      <div class="mb-3">
        <label for="quoteBody" class="form-label">Quote</label>
        <textarea class="form-control" id="quoteBody"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateQuote"
}
</script>

<style scoped>

</style>