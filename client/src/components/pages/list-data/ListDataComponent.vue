<template>
    <div>
    <h3 class="text-left">Operadoras</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Registro ANS</th>
          <th class="text-center">CNPJ</th>
          <th class="text-center">Razão Social</th>
          <th class="text-center">Nome Fantasia</th>
          <th class="text-center">Modalidade</th>
          <th class="text-center">Logradouro</th>
          <th class="text-center">Número</th>
          <th class="text-center">Complemento</th>
          <th class="text-center">Bairro</th>
          <th class="text-center">Cidade</th>
          <th class="text-center">UF</th>
          <th class="text-center">CEP</th>
          <th class="text-center">DDD</th>
          <th class="text-center">Telefone</th>
          <th class="text-center">Fax</th>
          <th class="text-center">E-mail</th>
          <th class="text-center">Representante</th>
          <th class="text-center">Cargo Representante</th>
          <th class="text-center">Data de registro</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas" :key="data.registro_ans">
          <td>{{ data.registro_ans }}</td>
          <td>{{ data.cnpj }}</td>
          <td>{{ data.razao_social }}</td>
          <td>{{ data.nome_fantasia }}</td>
          <td>{{ data.modalidade }}</td>
          <td>{{ data.logradouro }}</td>
          <td>{{ data.numero }}</td>
          <td>{{ data.complemento }}</td>
          <td>{{ data.bairro }}</td>
          <td>{{ data.cidade }}</td>
          <td>{{ data.uf }}</td>
          <td>{{ data.cep }}</td>
          <td>{{ data.ddd }}</td>
          <td>{{ data.telefone }}</td>
          <td>{{ data.fax }}</td>
          <td>{{ data.e_mail }}</td>
          <td>{{ data.representante }}</td>
          <td>{{ data.cargo_representante }}</td>
          <td>{{ data.data_registro }}</td>
          <td>
            <router-link
              :to="{ name: 'update', params: { id: data.registro_ans } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'edit']" /> Editar
            </router-link>
          </td>
          <td>
            <button @click="removeData(data.registro_ans)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" /> Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListData.js"></script>

<style scoped>
.table{
  height: 40em;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
