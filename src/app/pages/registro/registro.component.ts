import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    // this.usuario.email = 'brayan.salazar25@gmail.com';

  }


  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }
    console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form);



  }

}
