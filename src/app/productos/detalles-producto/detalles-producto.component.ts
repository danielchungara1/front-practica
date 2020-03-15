import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from 'src/app/shared/backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  producto: ProductoModel;

  constructor(private backendService: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idProducto = +params['id'];
      this.backendService.get(ProductoModel.PATH +'/'+ idProducto).subscribe(
        data => {
          this.producto = data as ProductoModel;
        }
      )
    });
  }

}
