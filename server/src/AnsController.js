const csv = require("csvtojson");
const csvFilePath = './src/files/Relatorio_cadop.csv';



class AnsController {


    async getOperadoras(req, res) {

        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                //console.log(jsonObj);
              return res.status(200).json(jsonObj);
              
            })
    }
}


module.exports = new AnsController();