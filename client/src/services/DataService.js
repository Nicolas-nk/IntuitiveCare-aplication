import Api from './Api';

export default {
  /**
   * Método responsável por criar uma nova 'Operadora'
   * (POST): localhost:3000/api/datas
   */
  async createNewData(data) {
    try {
      const response = await Api().post('/datas', data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por listar todas as 'Operadora'
   * (GET): localhost:3000/api/datas
   */
  async getDatas() {
    try {
      const response = await Api().get('/datas');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por Listar por Id uma determinada 'Operadora'
   * (GET): localhost:3000/api/datas/:id
   */
  async getDataId(id) {
    try {
      const response = await Api().get(`/datas/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por atualizar uma determinada 'Operadora' por Id
   * (PUT): localhost:3000/api/datas/:id
   */
  async updateData(data) {
    try {
      const id = data.data_id;
      const response = await Api().put(`/datas/${id}`, data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
   * Método responsável por excluir um determinado 'data' por Id
   * (DELETE): localhost:3000/api/datas/:id
   */
  async deleteData(id) {
    try {
      const response = await Api().delete(`/datas/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
