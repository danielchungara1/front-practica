import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from './model/usuario.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  titulo: string;
  usuario: UsuarioModel;
  accion: string;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.titulo = 'Login';
    this.accion = 'Ingresar';
  }

  onSubmit() {
    alert('Nada todavia :(');
  }
}
