import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./pages/quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
  {
    path: 'nuestros-trabajos',
    loadChildren: () => import('./pages/nuestros-trabajos/nuestros-trabajos.module').then( m => m.NuestrosTrabajosPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },  
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'cotizacion',
    loadChildren: () => import('./pages/cotizacion/cotizacion.module').then( m => m.CotizacionPageModule)
  },
  {
    path: 'detalle-cotizacion',
    loadChildren: () => import('./pages/detalle-cotizacion/detalle-cotizacion.module').then( m => m.DetalleCotizacionPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'modificar-empresa/:id',
    loadChildren: () => import('./pages/modificar-empresa/modificar-empresa.module').then( m => m.ModificarEmpresaPageModule)
  },
  {
    path: 'agregar-material',
    loadChildren: () => import('./pages/agregar-material/agregar-material.module').then( m => m.AgregarMaterialPageModule)
  },
  {
    path: 'modificar-material/:id',
    loadChildren: () => import('./pages/modificar-material/modificar-material.module').then( m => m.ModificarMaterialPageModule)
  },
  {
    path: 'modificar-catalogo',
    loadChildren: () => import('./pages/modificar-catalogo/modificar-catalogo.module').then( m => m.ModificarCatalogoPageModule)
  },
  {
    path: 'agregar-proveedor',
    loadChildren: () => import('./pages/agregar-proveedor/agregar-proveedor.module').then( m => m.AgregarProveedorPageModule)
  },
  {
    path: 'modificar-proveedor',
    loadChildren: () => import('./pages/modificar-proveedor/modificar-proveedor.module').then( m => m.ModificarProveedorPageModule)
  },
  {
    path: 'agregar-transporte',
    loadChildren: () => import('./pages/agregar-transporte/agregar-transporte.module').then( m => m.AgregarTransportePageModule)
  },
  {
    path: 'modificar-transporte',
    loadChildren: () => import('./pages/modificar-transporte/modificar-transporte.module').then( m => m.ModificarTransportePageModule)
  },
  {
    path: 'agregar-mano-obra',
    loadChildren: () => import('./pages/agregar-mano-obra/agregar-mano-obra.module').then( m => m.AgregarManoObraPageModule)
  },
  {
    path: 'modificar-mano-obra',
    loadChildren: () => import('./pages/modificar-mano-obra/modificar-mano-obra.module').then( m => m.ModificarManoObraPageModule)
  },
  {
    path: 'agregar-credencial',
    loadChildren: () => import('./pages/agregar-credencial/agregar-credencial.module').then( m => m.AgregarCredencialPageModule)
  },
  {
    path: 'modificar-credencial',
    loadChildren: () => import('./pages/modificar-credencial/modificar-credencial.module').then( m => m.ModificarCredencialPageModule)
  },
  
  {
    path: 'agregar-catalogo',
    loadChildren: () => import('./pages/agregar-catalogo/agregar-catalogo.module').then( m => m.AgregarCatalogoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },
  
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
