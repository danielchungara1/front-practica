import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from 'src/app/shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {

  searchText: string;
  productos: ProductoModel[];
  constructor(private backendService: BackendService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'];
      if (this.searchText === undefined){
        this.searchText = '';
      }
      this.onSubmit();
    });
  }

  onSubmit(){
    this.backendService.get(ProductoModel.PATH + '/search-products?text=' + this.searchText)
    .subscribe(data =>{
      this.productos = data as ProductoModel[];
    });
  }

  editar(id: number){
    this.router.navigate(['/edit-producto', id]);
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
