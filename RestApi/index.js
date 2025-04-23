require('dotenv').config()
const port = process.env.PORT || 3000,
express = require('express'),
app = express();
db = require('./models')
cors = require('cors')
bodyParser = require('body-parser');
passport = require('passport');
LocalStrategy = require('./passport/local'),
JWTStrategy = require('./passport/jwt')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

passport.use('local', LocalStrategy);
passport.use('jwt', JWTStrategy);
app.use(passport.initialize());

app.use('/auth',require('./routes/auth'));
app.use('/users',require('./routes/users'));
app.use('/empresas',require('./routes/empresas'));
app.use('/materiales',require('./routes/materiales'));


//--------------------------------------------------------MODIFICAR y ELIMINAR DE EMPRESAS--------------------------------------------------------
app.put('/modemp/:id', (req, res) => {
        const empId = req.params.id;
        const { rut,
        nom_empresa ,
        telefono,
        correo,
        contrasena,
        direccion } = req.body;
      
        // Utiliza la librería de ORM o la base de datos NoSQL para modificar los datos
        db.empresa.update({ rut,
                nom_empresa ,
                telefono,
                correo,
                contrasena,
                direccion  }, { where: { id: empId } })
          .then(() => {
            res.status(200).json({ message: 'Datos de Empresa modificados exitosamente' });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      });

app.delete('/modemp/:id', (req, res) => {
        const empId = req.params.id;
      
        // Utiliza la librería de ORM o la base de datos NoSQL para modificar los datos
        db.empresa.destroy({ where: { id: empId } })
          .then(() => {
            res.status(200).json({ message: 'Datos de Empresa eLIMINADOS exitosamente' });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      });

//---------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------MODIFICAR y ELIMINAR DE Materiales--------------------------------------------------------
app.put('/modmat/:id', (req, res) => {
  const matId = req.params.id;
  const { nom_material,
  descripcion ,
  tipo,
  precio} = req.body;

  // Utiliza la librería de ORM o la base de datos NoSQL para modificar los datos
  db.material.update({ nom_material,
    descripcion ,
    tipo,
    precio }, { where: { id: matId } })
    .then(() => {
      res.status(200).json({ message: 'Datos de Material modificados exitosamente' });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

app.delete('/modmat/:id', (req, res) => {
  const matId = req.params.id;

  // Utiliza la librería de ORM o la base de datos NoSQL para modificar los datos
  db.material.destroy({ where: { id: matId } })
    .then(() => {
      res.status(200).json({ message: 'Datos de Material eLIMINADOS exitosamente' });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//---------------------------------------------------------------------------------------------------------------------




app.listen(port,()=>{
        console.log(`Servidor corriendo en puerto ${port} ...`);


});

db.sequelize
.sync({force: false})
.then(() => console.log('conectado a la BD'))
.catch((e) => console.log(`Error => ${e}`));