import { BackendModel } from 'src/app/shared/backend-model';

export class ProductoModel extends BackendModel{
    
    static PATH = 'productos'

    nombre: string;
    precio: number;
}