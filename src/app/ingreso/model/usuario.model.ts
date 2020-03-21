import { BackendModel } from 'src/app/shared/backend-model';

export class UsuarioModel extends BackendModel{

    static PATH = 'usuario'

    email: string;
    password: string;
}
