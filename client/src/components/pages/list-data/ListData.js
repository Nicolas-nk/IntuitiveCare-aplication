import DataService from '../../../services/DataService';

export default {
  name: 'ListDataComponent',
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.listAllDatas();
  },
  methods: {
    async listAllDatas() {
      const response = await DataService.getDatas();
      this.datas = response;
    },

    async removeData(id) {
      this.$swal({
        title: 'Você tem certeza que deseja remover essa operadora?',
        text: 'Atenção! Esta operadora será excluída!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim! Quero deletar!',
      }).then(async (result) => {
        if (result.value) {
          await DataService.deleteData(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listAllDatas();
        } else {
          this.$swal('Cancelado', 'Operação cancelada', 'info');
        }
      });
    },
  },
};
