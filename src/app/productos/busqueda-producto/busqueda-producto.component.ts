import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from 'src/app/shared/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  searchText: String;
  productos: ProductoModel[];
  constructor(private backendService: BackendService,
              private router: Router) { }

  ngOnInit(): void {
    this.searchText='';
  }

  onSubmit(){
    this.backendService.get(ProductoModel.PATH + '/search-products?text=' + this.searchText)
    .subscribe(data =>{
      this.productos = data as ProductoModel[];
    });   
  }

  editar(id:number){
    this.router.navigate(['/edit-producto', id], { queryParams: { titulo: 'Editar Producto' } });
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
