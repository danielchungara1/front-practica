import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/lista-deprecated/productos.component';
import { HomeComponent } from './home/home.component';
import { AddEditProductoComponent } from './productos/add-edit-producto/add-edit-producto.component';
import { BusquedaProductoComponent } from './productos/busqueda-producto/busqueda-producto.component';
import { DetallesProductoComponent } from './productos/detalles-producto/detalles-producto.component';


const routes: Routes = [

  {path:'', component: HomeComponent,
    children: [
      {path: 'nuevo-producto', component: AddEditProductoComponent},
      {path: 'busqueda-producto', component: BusquedaProductoComponent,
        children: [
          {path: 'edit-producto/:id', component: AddEditProductoComponent}
        ]
      },
      {path: 'detalles-producto/:id', component: DetallesProductoComponent}
    ]
  },
  {path:'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
