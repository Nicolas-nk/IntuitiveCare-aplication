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
              id="registro_ans"
              name="registro_ans"
              class="form-control"
              placeholder="000000"
              v-model="dataForm.registro_ans"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.registro_ans.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.registro_ans.required"
              class="invalid-feedback"
            >
              O campo 'Registro ANS' é requerido!
            </div>
          </div>
          <!-- FIM BLOCO: registro ANS-->

          <!-- INICIO BLOCO: CNPJ-->
          <div class="form-group">
            <label class="font-weight-bold">CNPJ</label>
            <input
              type="number"
              id="cnpjs"
              name="cnpj"
              class="form-control"
              placeholder="00.000.000/0000-00"
              v-model="dataForm.cnpj"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.cnpj.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.cnpj.required"
              class="invalid-feedback"
            >
              O campo 'CNPJ' é requerido!
            </div>
          </div>
          <!-- FIM BLOCO: CNPJ-->

          <!-- INICIO BLOCO: Razão Social-->
          <div class="form-group">
            <label class="font-weight-bold">Razão Social</label>
            <input
              type="text"
              id="razao_social"
              name="razao_socials"
              class="form-control"
              placeholder="Razão Social"
              v-model="dataForm.razao_social"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.razao_social.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.razao_social.required"
              class="invalid-feedback"
            >
              O campo 'Razão Social' é requerido!
            </div>
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
              placeholder="Nome Fantasia"
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
              placeholder="Modalidade"
              v-model="dataForm.modalidade"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.modalidade.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.modalidade.required"
              class="invalid-feedback"
            >
              O campo 'Modalidade' é requerido!
            </div>
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
              placeholder="Logradouro"
              v-model="dataForm.logradouro"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.logradouro.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.logradouro.required"
              class="invalid-feedback"
            >
              O campo 'Logradouro' é requerido!
            </div>
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
              placeholder="Número"
              v-model="dataForm.numero"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.numero.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.numero.required"
              class="invalid-feedback"
            >
              O campo 'Número' é requerido!
            </div>
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
              placeholder="Complemento"
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
              placeholder="Bairro"
              v-model="dataForm.bairro"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.bairro.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.bairro.required"
              class="invalid-feedback"
            >
              O campo 'Bairro' é requerido!
            </div>
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
              placeholder="Cidade"
              v-model="dataForm.cidade"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.cidade.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.cidade.required"
              class="invalid-feedback"
            >
              O campo 'Cidade' é requerido!
            </div>
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
              placeholder="UF"
              v-model="dataForm.uf"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.uf.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.uf.required"
              class="invalid-feedback"
            >
              O campo 'UF' é requerido!
            </div>
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
              placeholder="00000-000"
              v-model="dataForm.cep"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.cep.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.cep.required"
              class="invalid-feedback"
            >
              O campo 'CEP' é requerido!
            </div>
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
              placeholder="DDD"
              v-model="dataForm.ddd"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.ddd.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.ddd.required"
              class="invalid-feedback"
            >
              O campo 'DDD' é requerido!
            </div>
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
              placeholder="91234-5678"
              v-model="dataForm.telefone"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.telefone.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.telefone.required"
              class="invalid-feedback"
            >
              O campo 'Telefone' é requerido!
            </div>
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
              placeholder="123-4567"
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
              placeholder="E-mail"
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
              placeholder="Representante"
              v-model="dataForm.representante"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.representante.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.representante.required"
              class="invalid-feedback"
            >
              O campo 'Representante' é requerido!
            </div>
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
              placeholder="Cargo Representante"
              v-model="dataForm.cargo_representante"
              :class="{
                'is-invalid':
                  isSubmitted && $v.dataForm.cargo_representante.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.cargo_representante.required"
              class="invalid-feedback"
            >
              O campo 'Cargo Representa' é requerido!
            </div>
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
              placeholder="dd/mm/aaaa"
              v-model="dataForm.data_registro"
              :class="{
                'is-invalid': isSubmitted && $v.dataForm.data_registro.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.dataForm.data_registro.required"
              class="invalid-feedback"
            >
              O campo 'Data Registro' é requerido!
            </div>
          </div>
          <!-- FIM BLOCO: Data de registro-->
          <div class="form-group">
            <button @click="submitNewData" class="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateData.js"></script>
