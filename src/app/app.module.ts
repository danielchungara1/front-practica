import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/lista-deprecated/productos.component';
import { AddEditProductoComponent} from './productos/add-edit-producto/add-edit-producto.component';
import { BusquedaProductoComponent } from './productos/busqueda-producto/busqueda-producto.component';
import { HomeComponent } from './home/home.component';
import { DetallesProductoComponent } from './productos/detalles-producto/detalles-producto.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AddEditProductoComponent,
    BusquedaProductoComponent,
    HomeComponent,
    DetallesProductoComponent,
    IngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
