const {create} = require ('../services/catalogo/create');

async function _1create(catalogo){
    return await create(catalogo);
}


module.exports = {
    _1create
}