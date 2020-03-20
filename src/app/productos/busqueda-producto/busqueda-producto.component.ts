import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../model/producto.model';
import { BackendService } from 'src/app/shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})
export class BusquedaProductoComponent implements OnInit {
  closeResult: string;

  searchText: string;
  productos: ProductoModel[];
  constructor(private backendService: BackendService,
              private router: Router, private route: ActivatedRoute,
              private modalService: NgbModal) { }

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

  detalles (id: number){
    this.router.navigate(['/detalles-producto', id]);
  }

  baja(id: number){

    this.backendService.delete(ProductoModel.PATH + '/delete/' + id).subscribe(data=>{
      this.refreshListaProductos();
    });
  }

  refreshListaProductos(){
    this.onSubmit();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
