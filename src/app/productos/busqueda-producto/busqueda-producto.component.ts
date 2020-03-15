import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  searchText: String;
  productos: ProductoModel[];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productos = [
      {id:1, nombre:'Notebook', precio:29999.99},
      {id:2, nombre:'Monitor', precio:9999.99},
      {id:3, nombre:'Mouse', precio:9.99},
    ]
  }

  editar(){
    alert("Proximamente...");
  }

  baja(){
    alert("Proximamente...");
  }

}
