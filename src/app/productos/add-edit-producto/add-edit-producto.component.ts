import { Component, OnInit, Input } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-producto',
  templateUrl: './add-edit-producto.component.html',
  styleUrls: ['./add-edit-producto.component.css']
})
export class AddEditProductoComponent implements OnInit {

  titulo: string;
  idProducto: number;

  producto: ProductoModel;

  constructor(private route: ActivatedRoute, private backendService: BackendService,
              private router: Router, private toastr: ToastrService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProducto = +params.id;
      if (this.idProducto) {
        this.getProducto(this.idProducto);
        this.titulo = 'Editar';
      } else {
        this.producto = new ProductoModel();
        this.titulo = 'Nuevo Producto';
      }
    });
  }

  onSubmit() {
    if (!this.formInvalid()) {
      this.showError('El producto ingresado es invalido');
      return;
    }

    if (this.producto.id) {// put
      this.backendService.put(ProductoModel.PATH + '/edit', this.producto).subscribe(
        data => {} , error => {this.showError(); }, () => {this.showSucess(); }
      );
    } else { // post
      this.backendService.post(ProductoModel.PATH, this.producto).subscribe(
        data => {
          this.producto = data as ProductoModel;
        }, error => {this.showError();
        }, () => {this.showSucess(); this.router.navigate(['/detalles-producto', this.producto.id]); }
      );
    }
  }

  getProducto(id) {
    this.backendService.get(ProductoModel.PATH + '/' + id).subscribe(data => {
      this.producto = data as ProductoModel;
    });
  }

  showError(message = 'No se pudo guardar el producto, intentelo mas tarde.') {
    this.toastr.error(message);
  }

  showSucess(message = 'Producto guardado exitosamente.') {
    this.toastr.success(message);
  }

  formInvalid() {
    return this.producto.nombre && this.producto.precio;
  }


}
