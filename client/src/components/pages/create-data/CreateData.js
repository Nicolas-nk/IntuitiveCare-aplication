import { required } from "vuelidate/lib/validators";
import DataService from "@/services/DataService";

export default {
  nome: "CreateDataComponents",
  data() {
    return {
      dataForm: {
        registro_ans: null,
        cnpj: null,
        razao_social: null,
        nome_fantasia: null,
        modalidade: null,
        logradouro: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        uf: null,
        cep: null,
        ddd: null,
        telefone: null,
        fax: null,
        e_mail: null,
        representante: null,
        cargo_representante: null,
        data_registro: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    dataForm: {
      registro_ans: { required },
      cnpj: { required },
      razao_social: { required },
      nome_fantasia: {},
      modalidade: { required },
      logradouro: { required },
      numero: { required },
      complemento: {},
      bairro: { required },
      cidade: { required },
      uf: { required },
      cep: { required },
      ddd: { required },
      telefone: { required },
      fax: {},
      e_mail: {},
      representante: { required },
      cargo_representante: { required },
      data_registro: { required },
    },
  },

  methods: {
    handleSubmitForm() {},

    async submitNewData() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal(
            "Oops!",
            "Você precisa prencher todos os campos requeridos",
            "error"
          );
          return;
        }

        await DataService.createNewData(this.dataForm);
        this.$swal({
          title: "Operadora adicionada com sucesso",
          icon: "success",
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        }).then((data) => {
          this.$router.push({
            name: "home",
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
