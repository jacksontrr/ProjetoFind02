import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthcGuard } from './guards/authc.guard';
import { LoginCliGuard } from './guards/login-cli.guard';
import { LoginProfGuard } from './guards/login-prof.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicial',
    pathMatch: 'full'
  },
  {
    path: 'home-cli',
    loadChildren: () => import('./pages/home-cli/home-cli.module').then( m => m.HomeCliPageModule),    canActivate: [AuthcGuard]
  },
  {
    path: 'home-prof',
    loadChildren: () => import('./pages/home-prof/home-prof.module').then( m => m.HomeProfPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'cadastrar-cli',
    loadChildren: () => import('./pages/cadastrar-cli/cadastrar-cli.module').then( m => m.CadastrarCliPageModule),/*canActivate: [LoginCliGuard]*/
  },
  {
    path: 'cadastrar-prof',
    loadChildren: () => import('./pages/cadastrar-prof/cadastrar-prof.module').then( m => m.CadastrarProfPageModule),/*canActivate: [LoginProfGuard]*/
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule),
  },
  {
    path: 'login-prof',
    loadChildren: () => import('./pages/login-prof/login-prof.module').then( m => m.LoginProfPageModule),/*
    canActivate: [LoginProfGuard]*/
  },
  {
    path: 'login-cli',
    loadChildren: () => import('./pages/login-cli/login-cli.module').then( m => m.LoginCliPageModule),/*canActivate: [LoginCliGuard]*/
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
