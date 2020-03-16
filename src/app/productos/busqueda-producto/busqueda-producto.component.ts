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
    this.searchText='';
  }

  onSubmit(){
    this.backendService.get(ProductoModel.PATH + '/search-products?text=' + this.searchText)
    .subscribe(data =>{
      this.productos = data as ProductoModel[];
    });   
  }

  editar(){
    alert("Proximamente...");
  }

  baja(id: number){
    this.backendService.delete(ProductoModel.PATH + '/delete/' + id).subscribe(data=>{
      this.refreshListaProductos();
    });
  }

  refreshListaProductos(){
    this.onSubmit();
  }
}
