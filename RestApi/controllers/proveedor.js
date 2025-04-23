const {create} = require ('../services/proveedor/create');

async function _1create(proveedor){
    return await create(proveedor);
}


module.exports = {
    _1create
}