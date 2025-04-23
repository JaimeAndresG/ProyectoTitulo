const { create }= require('../services/empresas/create');
const {findByID, findAll }= require('../services/empresas/find')

async function _1create(empresa){
    return await create(empresa);
}

async function _findByID(id){
    return await findByID(id);
}

async function _findAll() {
    return await findAll()
}

module.exports = {
    _1create,_findAll,_findByID
}