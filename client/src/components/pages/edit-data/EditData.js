import DataService from '../../../services/DataService';

export default {
  name: 'EditDataComponent',
  data() {
    return {
      dataForm: {},
    };
  },

  mounted() {
    this.getDataById();
  },

  methods: {
    async getDataById() {
      const { id } = this.$route.params;
      const response = await DataService.getDataId(id);

      this.dataForm = { ...response };
    },

    async updateFormData() {
      // Chamada do service passando as propriedades por meio do 'dataForm' (funciona)
      await DataService.updateData(this.dataForm);
      this.$swal({
        title: 'Operadora atualizada com sucesso!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'home',
        });
      });
    },
  },
};
