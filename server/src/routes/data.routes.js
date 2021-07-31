const router = require('express-promise-router')();
const dataController = require('../controllers/data.controller');

// ==> Definindo as rotas do CRUD - 'data'

// ==> Rota responsável por criar uma nova Operadora: (POST): localhost:3000/api/datas
router.post('/datas', dataController.createData);

// ==> Rota responsável por listar todas as Operadoras: (GET): localhost:3000/api/datas
router.get('/datas', dataController.listAllDatas);

// ==> Rota responsável por listar um determinado Operadora por Id: (GET): localhost:3000/api/datas/:id
router.get('/datas/:id', dataController.findDataById)

// ==> Rota reponsável por atualizar uma determinada Operadora por Id: (PUT): localhost:3000/api/datas/:id
router.put('/datas/:id', dataController.updateDataById)

// ==> Rota responsável por deletar/excluir um determinada Operadora por Id: localhost:3000/api/datas/:id
router.delete('/datas/:id', dataController.deleteDataById);

module.exports = router;