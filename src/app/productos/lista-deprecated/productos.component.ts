import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from '../../shared/backend.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: ProductoModel[];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.backendService.get(ProductoModel.PATH).subscribe(
      (data) => {
        this.productos = data as ProductoModel[];
      }
    );
  }

}
