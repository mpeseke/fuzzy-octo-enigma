<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/quotes">Quotes</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/create-quote">Create Quote</router-link>
          </li>
           <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/create-user">Create User</router-link>
          </li>
           <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/dex">Dex</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>