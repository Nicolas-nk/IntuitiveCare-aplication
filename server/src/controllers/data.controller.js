/* eslint-disable no-unused-vars */
const db = require("../config/database");


// ==> Método responsável por criar uma nova Operadora:
exports.createData = async (req, res) => {
  const { registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro } = req.body;
  try {
    const { rows } = await db.query(
      "INSERT INTO operadoras (registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)",
      [registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro]
    );
    res.status(201).send({
      message: "Operadora adicionada com sucesso!",
      body: {
        data: { registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro },
      },
    });
  } catch (error) {
    console.error('createData', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar todos as Operadoras:
exports.listAllDatas = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT 
                                      registro_ans, 
                                      cnpj, 
                                      razao_social, 
                                      nome_fantasia, 
                                      modalidade, 
                                      logradouro, 
                                      numero, 
                                      complemento, 
                                      bairro, 
                                      cidade, 
                                      uf, 
                                      cep, 
                                      ddd, 
                                      telefone, 
                                      fax, 
                                      e_mail, 
                                      representante, 
                                      cargo_representante, 
                                      to_char(data_registro, 'yyyy-MM-dd') as data_registro 
                                    FROM operadoras ORDER BY razao_social asc`);
    res.status(200).send(rows);
  } catch (error) {
    console.error('listAllDatas', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por listar um determinado 'data' por Id:
exports.findDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT
                                      registro_ans, 
                                      cnpj, 
                                      razao_social, 
                                      nome_fantasia, 
                                      modalidade, 
                                      logradouro, 
                                      numero, 
                                      complemento, 
                                      bairro, 
                                      cidade, 
                                      uf, 
                                      cep, 
                                      ddd, 
                                      telefone, 
                                      fax, 
                                      e_mail, 
                                      representante, 
                                      cargo_representante, 
                                      to_char(data_registro, 'yyyy-MM-dd') as data_registro 
                                    FROM operadoras WHERE registro_ans = $1`,
      [id]
    );
    if (!rows.length) {
      throw 'data_not_found';
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    console.error('findDataById', error);
    if (error == 'data_not_found') {
      res.status(404).send({
        message: "data not found."
      });
    } else {
      res.status(500).send({
        message: "Ocorreu um erro."
      });
    }
  }
};

// ==> Método responsável por atualizar um determinado 'data' por Id:
exports.updateDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const { registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro } = req.body;
    const { rows } = await db.query(`UPDATE operadoras 
                                    SET cnpj = $1, 
                                    razao_social = $2, 
                                    nome_fantasia = $3, 
                                    modalidade = $4, 
                                    logradouro = $5, 
                                    numero = $6, 
                                    complemento = $7, 
                                    bairro = $8, 
                                    cidade = $9, 
                                    uf = $10, 
                                    cep = $11, 
                                    ddd = $12, 
                                    telefone = $13, 
                                    fax = $14, 
                                    e_mail = $15, 
                                    representante = $16, 
                                    cargo_representante = $17,
                                    data_registro = $18
                                    WHERE registro_ans = $19`,
      [cnpj, razao_social, nome_fantasia, modalidade, logradouro, numero, complemento, bairro, cidade, uf, cep, ddd, telefone, fax, e_mail, representante, cargo_representante, data_registro, id]
    );
    res.status(200).send({ message: "Data Updated Successfully!" });
  } catch (error) {
    console.error('updatedataById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};

// ==> Método responsável por deletar um determinado 'data' por Id:
exports.deleteDataById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM operadoras WHERE registro_ans = $1", [id]);
    res.status(200).send({ message: "data deleted successfully!" });
  } catch (error) {
    console.error('deleteDataById', error);
    res.status(500).send({
      message: "Ocorreu um erro."
    });
  }
};