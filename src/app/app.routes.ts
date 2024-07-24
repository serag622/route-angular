import { Routes } from '@angular/router';
import { authGuard } from './common/guards/auth.guard';
import { unauthGuard } from './common/guards/unauth.guard';
import { canNavigateGuard } from './common/guards/can-navigate.guard';
import { productResolver } from './common/resolver/product.resolver';
// import { canNavigateGuard } from './common/guards/can-navigate.guard';

export const routes: Routes = [
  {
    path: 'c1/1',
    // canActivate: [unauthGuard],
    loadComponent: () =>
      import('./components/c1/c1.component').then((c) => c.C1Component),
  },
  // {
  //     path : '' ,
  //     canActivate : [authGuard] ,
  //     loadComponent : ()=> import('./components/c3/c3.component').then((c)=> c.C3Component )
  // }
  // {
  //     path : 'c2',
  //     loadComponent : ()=> import('./components/c3/c3.component').then((c)=> c.C3Component )
  // },
  {
    path: 'c2',
    // canActivate : [authGuard],
    canDeactivate: [canNavigateGuard],
    // canLoad :[],
    // canMatch : [()=> !!localStorage.getItem('token')],
    loadComponent: () =>
      import('./components/c2/c2.component').then((c) => c.C2Component),
  },
  {
    path: 'c1',
    redirectTo: 'c2',
    // pathMatch: 'full',
  },
  {
    path: 'c3',
    loadComponent: () =>
      import('./components/c3/c3.component').then((c) => c.C3Component),
  },
  {
    path: 'product-details/:id',
    resolve : {
      data : productResolver
    },
    loadComponent: () =>
      import('./components/c3/c4/c4.component').then((c) => c.C4Component),
    runGuardsAndResolvers : 'paramsOrQueryParamsChange'
  },
];
