<template>
    <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar Operadora</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormData()">

          <!-- FIM BLOCO: registro ANS-->

          <!-- INICIO BLOCO: CNPJ-->
          <div class="form-group">
            <label class="font-weight-bold">CNPJ</label>
            <input
              type="number"
              id="cnpj"
              name="cnpj"
              class="form-control"
              v-model="dataForm.cnpj"
            />
          </div>
          <!-- FIM BLOCO: CNPJ-->

          <!-- INICIO BLOCO: Razão Social-->
          <div class="form-group">
            <label class="font-weight-bold">Razão Social</label>
            <input
              type="text"
              id="razao_social"
              name="razao_social"
              class="form-control"
              v-model="dataForm.razao_social"
            />
          </div>
          <!-- FIM BLOCO: Razão Social-->

          <!-- INICIO BLOCO: Nome Fantasia-->
          <div class="form-group">
            <label class="font-weight-bold">Nome Fantasia</label>
            <input
              type="text"
              id="nome_fantasia"
              name="nome_fantasia"
              class="form-control"
              v-model="dataForm.nome_fantasia"
            />
          </div>
          <!-- FIM BLOCO: Nome Fantasia-->

          <!-- INICIO BLOCO: Modalidade-->
          <div class="form-group">
            <label class="font-weight-bold">Modalidade</label>
            <input
              type="text"
              id="modalidade"
              name="modalidade"
              class="form-control"
              v-model="dataForm.modalidade"
            />
          </div>
          <!-- FIM BLOCO: Modalidade-->

          <!-- INICIO BLOCO: Logradouro-->
          <div class="form-group">
            <label class="font-weight-bold">Logradouro</label>
            <input
              type="text"
              id="logradouro"
              name="logradouro"
              class="form-control"
              v-model="dataForm.logradouro"
            />
          </div>
          <!-- FIM BLOCO: Logradouro-->

          <!-- INICIO BLOCO: Número-->
          <div class="form-group">
            <label class="font-weight-bold">Número</label>
            <input
              type="number"
              id="numero"
              name="numero"
              class="form-control"
              v-model="dataForm.numero"
            />
          </div>
          <!-- FIM BLOCO: Número-->

          <!-- INICIO BLOCO: Complemento-->
          <div class="form-group">
            <label class="font-weight-bold">Complemento</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              class="form-control"
              v-model="dataForm.complemento"
            />
          </div>
          <!-- FIM BLOCO: Complemento-->

          <!-- INICIO BLOCO: Bairro-->
          <div class="form-group">
            <label class="font-weight-bold">Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              class="form-control"
              v-model="dataForm.bairro"
            />
          </div>
          <!-- FIM BLOCO: Bairro-->

          <!-- INICIO BLOCO: Cidade-->
          <div class="form-group">
            <label class="font-weight-bold">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              class="form-control"
              v-model="dataForm.cidade"
            />
          </div>
          <!-- FIM BLOCO: Cidade-->

          <!-- INICIO BLOCO: UF-->
          <div class="form-group">
            <label class="font-weight-bold">UF</label>
            <input
              type="text"
              id="uf"
              name="uf"
              class="form-control"
              v-model="dataForm.uf"
            />
          </div>
          <!-- FIM BLOCO: UF-->

          <!-- INICIO BLOCO: CEP-->
          <div class="form-group">
            <label class="font-weight-bold">CEP</label>
            <input
              type="number"
              id="cep"
              name="cep"
              class="form-control"
              v-model="dataForm.cep"
            />
          </div>
          <!-- FIM BLOCO: CEP-->

          <!-- INICIO BLOCO: DDD-->
          <div class="form-group">
            <label class="font-weight-bold">DDD</label>
            <input
              type="number"
              id="ddd"
              name="ddd"
              class="form-control"
              v-model="dataForm.ddd"
            />
          </div>
          <!-- FIM BLOCO: DDD-->

          <!-- INICIO BLOCO: Telefone-->
          <div class="form-group">
            <label class="font-weight-bold">Telefone</label>
            <input
              type="number"
              id="telefone"
              name="telefone"
              class="form-control"
              v-model="dataForm.telefone"
            />
          </div>
          <!-- FIM BLOCO: Telefone-->

          <!-- INICIO BLOCO: Fax-->
          <div class="form-group">
            <label class="font-weight-bold">Fax</label>
            <input
              type="number"
              id="fax"
              name="fax"
              class="form-control"
              v-model="dataForm.fax"
            />
          </div>
          <!-- FIM BLOCO: Fax-->

          <!-- INICIO BLOCO: E-mail-->
          <div class="form-group">
            <label class="font-weight-bold">E-mail</label>
            <input
              type="text"
              id="e_mail"
              name="e_mail"
              class="form-control"
              v-model="dataForm.e_mail"
            />
          </div>
          <!-- FIM BLOCO: E-mail-->

          <!-- INICIO BLOCO: Representante-->
          <div class="form-group">
            <label class="font-weight-bold">Representante</label>
            <input
              type="text"
              id="representante"
              name="representante"
              class="form-control"
              v-model="dataForm.representante"
            />
          </div>
          <!-- FIM BLOCO: Representante-->

          <!-- INICIO BLOCO: Cargo Representante-->
          <div class="form-group">
            <label class="font-weight-bold">Cargo Representante</label>
            <input
              type="text"
              id="cargo_representante"
              name="cargo_representante"
              class="form-control"
              v-model="dataForm.cargo_representante"
            />
           </div>
          <!-- FIM BLOCO: Cargo Representante-->

          <!-- INICIO BLOCO: Data de registro-->
          <div class="form-group">
            <label class="font-weight-bold">Data de registro</label>
            <input
              type="date"
              id="data_registro"
              name="data_registro"
              class="form-control"
              v-model="dataForm.data_registro"
            />
          </div>
          <!-- FIM BLOCO: Data de registro-->
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditData.js"></script>
