<template>
  <div id="container" style="background-color: #e6e6e6;">
    <!--Cabeçalho com logo IntuitiveCare -->
    <div class="text-center pt-2 pb-3 bg-white shadow-sm p-3 mb-5 bg-white rounded">
      <img src=".\assets\logo.png" alt="Intuitive Care" />
    </div>

    <div class="container">
      <!--INICIO NAVBAR -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 2em; margin-left: 0; margin-right:0;">
        <div class="container-md">
          <a class="navbar-brand">Relação de Operadoras Ativas ANS</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item activite">
                <router-link class="nav-link" to="/">Listar Operadoras</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/create-data">Criar Nova Operadora</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquisar"
                aria-label="Pesquisar"
              />
              <button class="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </div>
      </nav>
      <!-- FIM NAVBAR -->

      <div class="container pt-5  bg-white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
  name: "App",
  components: {},
};


</script>


<style>
</style>

