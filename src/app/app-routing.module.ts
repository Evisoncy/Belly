import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DefaultComponent } from './page/home/default/default.component';



const routes: Routes = [
  {path: 'home', component: DefaultComponent},
 /* {path: 'products', component: ProductsModule},
  {path: 'contacto', component: ContactoComponent},
  {path: 'carrito-compras', component: CarritoComprasComponent},*/
 

  {  path: '', pathMatch: "full", redirectTo: "home"},
  {  path: "contactus",
     loadChildren: () => import('./modules/contactus/contactus.module').then(m=>m.ContactusModule)
  },
  {  path:"products",
     loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:"carts",
    loadChildren: () => import('./modules/carts/carts.module').then(m => m.CartsModule)
  },

  {path: '**', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, // <- Indicar que se use el hash
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
