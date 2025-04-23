const db = require('../../models');

async function findByID(id){
    if(!id) throw new Error('sin id de empresa...');
    return await db.empresa.findOne({

        where:{
            id
        }
    });
}

async function findAll(){
    return await db.empresa.findAll({
        attributes: ['id','rut','nom_empresa','telefono','correo','direccion']
    })
}
module.exports ={
    findByID, findAll
}