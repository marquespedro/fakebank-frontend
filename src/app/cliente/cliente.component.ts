import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup = this.configurarFormCliente();

  constructor(
      private formBuilder: FormBuilder,
      private router:Router
    ) { }

  ngOnInit(): void {
  }

  configurarFormCliente() {
   return this.clienteForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required,  Validators.minLength(11) , Validators.maxLength(11)]]
    });
  }

  submitFormCliente(){
    console.log('formulario : ', this.clienteForm.value);
  }
}
