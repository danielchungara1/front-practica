import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from './model/usuario.model';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  titulo: string;
  usuario: UsuarioModel;
  accion: string;

  tipoIngreso: string;
  isRecuperoCredenciales = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      params => {
        this.tipoIngreso = params[0].path;
        switch (this.tipoIngreso) {
          case 'registro':
            this.titulo = 'Registro';
            this.accion = 'Registrar';
            break;
          case 'credenciales':
            this.titulo = 'Credenciales';
            this.accion = 'Recuperar';
            this.isRecuperoCredenciales = true;
            break;
          case 'login':
            this.titulo = 'Login';
            this.accion = 'Ingresar';
            break;
        }
        this.usuario = new UsuarioModel();
      }
    );
  }

  onSubmit() {
    alert('Nada todavia :(');
  }
}
