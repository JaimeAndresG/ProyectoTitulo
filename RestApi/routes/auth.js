const express = require('express'),
router = express.Router(),

/* {_1create} = require('../controllers/catalogo'), */
/* {_1create} = require('../controllers/manodeobra'), */
{_1createmat, _findByIDmat} = require('../controllers/materiales'),
/* {_1create} = require('../controllers/proveedor'), */
/* {_1create} = require('../controllers/transporte'),
{_1create} = require('../controllers/cotizacion'),
 */
{_create, _findByUsername} = require('../controllers/users'),

{_1create, _findByID} = require('../controllers/empresas'),


passport = require('passport');
jwt = require('jsonwebtoken')

/*------------------------------LOGIN------------------------------ */

router.post('/signin', async(req, res, next) => {
    passport.authenticate('local', {session: false} , function(err,user,info) {
        if (err) return res.status(500).json(err);
        if (!user) return res.status(400).json(info);
        const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '1h'})
        return res.status(200).json({
            token, expiresIn : 3600,
             user
        });
    })(req,res,next);

});
/*------------------------------REGISTRAR------------------------------ */

router.post('/signup', async(req, res) => {
    try {

        const foundUser = await _findByUsername(req.body.username);
        if (foundUser) {
            return res.status(400).json('eL USUARIO YA EXISTE')
        }
        const user = await _create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el usuario ${user.username} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
/*------------------------------Recupera EMPRESA------------------------------ */


router.post('/verempresa', async(req, res) => {
    try {

        const foundEmp = await _findByID(req.body.id);
        if (foundEmp) {
            return res.status(200).json({
                foundEmp
            })
        }

        return res.status(201).json({
            status : 'ERROR',
            message: `NO fue posible encontrar`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});
/*------------------------------CREA EMPRESA------------------------------ */

router.post('/creaempresa', async(req, res) => {
    try {

       /* const foundUser = await _findByUsername(req.body.username);
        if (foundUser) {
            return res.status(400).json('eL USUARIO YA EXISTE')
        } */
        const empresa = await _1create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el usuario ${empresa.nomempresa} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});


/*-----------------------------CATALOGO-------------------------------------- */
/* router.post('/signupcata', async(req, res) => {
    try {

        const manodeobra = await _1create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el catalogo ${catalogo.nom_cata} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
}); */


/*-----------------------------PROVEEDOR-------------------------------------- */
/* router.post('/signuppro', async(req, res) => {
    try {

        const manodeobra = await _1create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el proveedor ${proveedor.nom_pro} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
}); */

/*-----------------------------TRANSPORTE-------------------------------------- */
/* router.post('/signuptrasn', async(req, res) => {
    try {

        const transporte = await _1create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el transporte ${transporte.emp_tra} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
}); */

/*-----------------------------Materiales-------------------------------------- */
 router.post('/creamaterial', async(req, res) => {
    try {

        const material = await _1createmat(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `El Material ${material.nom_material} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
}); 

router.post('/vermaterial', async(req, res) => {
    try {

        const foundEmp = await _findByIDmat(req.body.id);
        if (foundEmp) {
            return res.status(200).json({
                foundEmp
            })
        }

        return res.status(201).json({
            status : 'ERROR',
            message: `NO fue posible encontrar`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});


module.exports = router;