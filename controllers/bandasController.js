let data = require('../db/index')

const bandasController = {
    index: function (req, res) {
        return res.render('listadoBandas', {
            index: data.lista
        })
    },
    show: function (req, res) {
        let elID = req.params.id
        let resultados = [];
        for (let i = 0; i < data.lista.length; i++) {
            if (elID==data.lista[i].id) {
                resultados.push(data.lista[i])
            }
        }
            if(resultados.length == 0){
                return res.send('ID no encontrado')
            }else{
                return res.render('detalleBanda', {
                    resultado: resultados
                });
            }

    },
    genero : function (req, res) {
        let elGenero = req.params.genero
        let resultadoGen = [];
        for (let i = 0; i < data.lista.length; i++) {
            if (elGenero===data.lista[i].genero) {
                resultadoGen.push(data.lista[i])                
            }         
        } 
            if(resultadoGen.length == 0){
                return res.send('Genero no encontrado')
            }else{
                return res.render('porGenero', {
                    resGen: resultadoGen
                });
            }
        
    }

}
















module.exports = bandasController;