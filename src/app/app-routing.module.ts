import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-estudiante',
    loadChildren: () => import('./crear-estudiante/crear-estudiante.module').then( m => m.CrearEstudiantePageModule)
  },
  {
    path: 'editar-estudiante/:id',
    loadChildren: () => import('./editar-estudiante/editar-estudiante.module').then( m => m.EditarEstudiantePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }