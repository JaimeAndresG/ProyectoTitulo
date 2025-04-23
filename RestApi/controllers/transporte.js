const {create} = require ('../services/transporte/create');

async function _1create(transporte){
    return await create(transporte);
}


module.exports = {
    _1create
}