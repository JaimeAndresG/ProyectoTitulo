const {create} = require ('../services/cotizacion/create');

async function _1create(cotizacion){
    return await create(cotizacion);
}


module.exports = {
    _1create
}