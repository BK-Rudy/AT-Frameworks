<template >
  <div id="app" :style="{'background-image':'url(https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 'background-size': 'cover'}">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand" style="color:gray">AT Frameworks - INFNET</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products" class="nav-link" style="color:white">Produtos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link" style="color:white">Adicionar Produto</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" style="color:white">Sobre</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2 style="color:black">Ofertas Imperdíveis</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style scoped>
  .container h2 {
    text-align: center;
    margin: 25px auto;
  }
</style>