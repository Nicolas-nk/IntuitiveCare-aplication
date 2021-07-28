<template>
  <div id="container">
    <!--Cabeçalho com logo IntuitiveCare -->
    <div id="logo" class="text-center">
      <img src=".\assets\logo.png" alt="Intuitive Care" />
    </div>

    <div id="main">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md">
            <h1 id="title">Relação de Operadoras Ativas ANS</h1>
          </div>

          <div class="col-md">
            <div class="card">
              <div class="card-body">
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <AppDataTable></AppDataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppDataTable from "./components/AppDataTable.vue";

export default {
  name: "App",
  components: {
    AppDataTable,
  },
};
</script>


<style>
#container {
  background: #f1f1f1;
}

#logo {
  padding-top: 0.6em;
  padding-bottom: 0.6em;

  background-color: #fff;
  box-shadow: 0 5px 5px #a8a8a8;
  -webkit-box-shadow: 0 5px 5px #a8a8a8;
  -moz-box-shadow: 0 5px 5px #a8a8a8;
}

.container {
  margin-top: 2em;
  background-color: #fff;
}

#title {
  font-size: 16pt;
  font-weight: normal;
  color: #5161f2;
}
</style>
