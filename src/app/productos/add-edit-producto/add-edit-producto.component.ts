import { Component, OnInit, Input } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';

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
              private router: Router) {
   }
     
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.titulo = params['titulo']);
    
    this.route.params.subscribe(params => {
      this.idProducto = +params['id'];
      if(this.idProducto){
        this.getProducto(this.idProducto);
      }else{
        this.producto = new ProductoModel();
      }
    });
  }

  onSubmit(){
    if (this.producto.id) {//put
      this.backendService.put(ProductoModel.PATH + '/edit', this.producto).subscribe();
    }else{//post
      this.backendService.post(ProductoModel.PATH, this.producto).subscribe(
        data=> {
          const p = data as ProductoModel;
          this.router.navigate(['/detalles-producto', p.id]);
        }
      );
    }
  }

  getProducto(id){
    this.backendService.get(ProductoModel.PATH + '/' + id).subscribe(data => {
      this.producto = data as ProductoModel;
    });
  }

}
   