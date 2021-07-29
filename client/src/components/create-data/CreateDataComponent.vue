<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Operadora</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <!-- INICIO BLOCO: registro ANS-->
          <div class="form-group">
            <label class="font-weight-bold">Registro ANS</label>
            <input
              type="number"
              class="form-control"
              placeholder="Registro ANS"
              v-model="data.registro_ans"
            />
          </div>
          <!-- FIM BLOCO: registro ANS-->

          <!-- INICIO BLOCO: CNPJ-->
          <div class="form-group">
            <label class="font-weight-bold">CNPJ</label>
            <input
              type="number"
              class="form-control"
              placeholder="CNPJ"
              v-model="data.cnpj"
            />
          </div>
          <!-- FIM BLOCO: CNPJ-->

          <!-- INICIO BLOCO: Razão Social-->
          <div class="form-group">
            <label class="font-weight-bold">Razão Social</label>
            <input
              type="text"
              class="form-control"
              placeholder="Razão Social"
              v-model="data.razao_social"
            />
          </div>
          <!-- FIM BLOCO: Razão Social-->

          <!-- INICIO BLOCO: Nome Fantasia-->
          <div class="form-group">
            <label class="font-weight-bold">Nome Fantasia</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nome Fantasia"
              v-model="data.nome_fantasia"
            />
          </div>
          <!-- FIM BLOCO: Nome Fantasia-->

          <!-- INICIO BLOCO: Modalidade-->
          <div class="form-group">
            <label class="font-weight-bold">Modalidade</label>
            <input
              type="text"
              class="form-control"
              placeholder="Modalidade"
              v-model="data.modalidade"
            />
          </div>
          <!-- FIM BLOCO: Modalidade-->

          <!-- INICIO BLOCO: Logradouro-->
          <div class="form-group">
            <label class="font-weight-bold">Logradouro</label>
            <input
              type="text"
              class="form-control"
              placeholder="Logradouro"
              v-model="data.logradouro"
            />
          </div>
          <!-- FIM BLOCO: Logradouro-->

          <!-- INICIO BLOCO: Número-->
          <div class="form-group">
            <label class="font-weight-bold">Número</label>
            <input
              type="number"
              class="form-control"
              placeholder="Número"
              v-model="data.numero"
            />
          </div>
          <!-- FIM BLOCO: Número-->

          <!-- INICIO BLOCO: Complemento-->
          <div class="form-group">
            <label class="font-weight-bold">Complemento</label>
            <input
              type="text"
              class="form-control"
              placeholder="Complemento"
              v-model="data.complemento"
            />
          </div>
          <!-- FIM BLOCO: Complemento-->

          <!-- INICIO BLOCO: Bairro-->
          <div class="form-group">
            <label class="font-weight-bold">Bairro</label>
            <input
              type="text"
              class="form-control"
              placeholder="Bairro"
              v-model="data.bairro"
            />
          </div>
          <!-- FIM BLOCO: Bairro-->

          <!-- INICIO BLOCO: Cidade-->
          <div class="form-group">
            <label class="font-weight-bold">Cidade</label>
            <input
              type="text"
              class="form-control"
              placeholder="Cidade"
              v-model="data.cidade"
            />
          </div>
          <!-- FIM BLOCO: Cidade-->

          <!-- INICIO BLOCO: UF-->
          <div class="form-group">
            <label class="font-weight-bold">UF</label>
            <input
              type="text"
              class="form-control"
              placeholder="UF"
              v-model="data.uf"
            />
          </div>
          <!-- FIM BLOCO: UF-->

          <!-- INICIO BLOCO: CEP-->
          <div class="form-group">
            <label class="font-weight-bold">CEP</label>
            <input
              type="number"
              class="form-control"
              placeholder="CEP"
              v-model="data.cep"
            />
          </div>
          <!-- FIM BLOCO: CEP-->

          <!-- INICIO BLOCO: DDD-->
          <div class="form-group">
            <label class="font-weight-bold">DDD</label>
            <input
              type="text"
              class="form-control"
              placeholder="DDD"
              v-model="data.ddd"
            />
          </div>
          <!-- FIM BLOCO: DDD-->

          <!-- INICIO BLOCO: Telefone-->
          <div class="form-group">
            <label class="font-weight-bold">Telefone</label>
            <input
              type="text"
              class="form-control"
              placeholder="Telefone"
              v-model="data.telefone"
            />
          </div>
          <!-- FIM BLOCO: Telefone-->

          <!-- INICIO BLOCO: Fax-->
          <div class="form-group">
            <label class="font-weight-bold">Fax</label>
            <input
              type="text"
              class="form-control"
              placeholder="Fax"
              v-model="data.fax"
            />
          </div>
          <!-- FIM BLOCO: Fax-->

          <!-- INICIO BLOCO: E-mail-->
          <div class="form-group">
            <label class="font-weight-bold">E-mail</label>
            <input
              type="text"
              class="form-control"
              placeholder="E-mail"
              v-model="data.e_mail"
            />
          </div>
          <!-- FIM BLOCO: E-mail-->

          <!-- INICIO BLOCO: Representante-->
          <div class="form-group">
            <label class="font-weight-bold">Representante</label>
            <input
              type="text"
              class="form-control"
              placeholder="Representante"
              v-model="data.representante"
            />
          </div>
          <!-- FIM BLOCO: Representante-->

          <!-- INICIO BLOCO: Cargo Representante-->
          <div class="form-group">
            <label class="font-weight-bold">Cargo Representante</label>
            <input
              type="text"
              class="form-control"
              placeholder="Cargo Representante"
              v-model="data.cargo_representante"
            />
          </div>
          <!-- FIM BLOCO: Cargo Representante-->

          <!-- INICIO BLOCO: Data de registro-->
          <div class="form-group">
            <label class="font-weight-bold">Data de registro</label>
            <input
              type="date"
              class="form-control"
              placeholder="dd/mm/aaaa"
              v-model="data.data_registro"
            />
          </div>
          <!-- FIM BLOCO: Data de registro-->
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
        name: "CreateDataComponent",
    },

    data() {
        return {
            data: {
                 registro_ans: "",
                 cnpj: "",
                 razao_social: "",
                 nome_fantasia: "",
                 modalidade: "",
                 logradouro: "",
                 numero: "",
                 complemento: "",
                 bairro: "",
                 cidade: "",
                 uf: "",
                 cep: "",
                 telofone: "",
                 fax: "",
                 e_mail: "",
                 representante: "",
                 cargo_representante: "",
                 data_registro: "",

            }
        };
    },
    methods: {
        handleSubmitForm();
    },
};
</script>