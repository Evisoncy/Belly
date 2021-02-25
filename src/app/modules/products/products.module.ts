import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { Categoria1Component } from './categoria1/categoria1.component';
import { Categoria3Component } from './categoria3/categoria3.component';
import { Categoria4Component } from './categoria4/categoria4.component';
import { HeaderCategoriaComponent } from './header-categoria/header-categoria.component';
import { ContentCatComponent } from './categoria1/content-cat/content-cat.component';
import { Product1Component } from './categoria1/product1/product1.component';
import { ContentProdComponent } from './categoria1/product1/content-prod/content-prod.component';
import { Categoria2Component } from './categoria2/categoria2.component';





@NgModule({
  declarations: [ Categoria1Component,  Categoria3Component, Categoria4Component, HeaderCategoriaComponent, ContentCatComponent, Product1Component, ContentProdComponent, Categoria2Component],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
