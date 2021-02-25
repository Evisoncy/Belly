import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Categoria1Component } from './categoria1/categoria1.component';

import { Categoria3Component } from './categoria3/categoria3.component';
import { Categoria4Component } from './categoria4/categoria4.component';
import { Product1Component } from './categoria1/product1/product1.component';
import { Categoria2Component } from './categoria2/categoria2.component';


const routes: Routes = [

  {path: "categoria1", component: Categoria1Component,
    
  },
  {path: "categoria1/product", component:Product1Component},

  {path:"categoria2", component:Categoria2Component},
  {path: "categoria3", component: Categoria3Component},
  {path: "categoria4", component:Categoria4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
