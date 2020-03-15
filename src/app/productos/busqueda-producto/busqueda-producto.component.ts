import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  searchText: String;
  productos: ProductoModel[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const url = ProductoModel.PATH + '/search-products?text=' + this.searchText;
    console.log(url);
    this.backendService.get(url)
    .subscribe(data =>{
      this.productos = data as ProductoModel[];
    });   
  }

  editar(){
    alert("Proximamente...");
  }

  baja(){
    alert("Proximamente...");
  }

}
