import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { VeiculosService } from '../model/veiculos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  form: FormGroup;
  cadastrado: boolean = false;

  constructor(private fb: FormBuilder, private service: VeiculosService) { 
    this.criarFormulario();
  }

  ngOnInit() {
  }

  criarFormulario() {
    this.form = this.fb.group({
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      marca:['', Validators.required],
      foto: [''],
      combustivel: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  gravar() {
    this.service.cadastrar(this.form.value);
    this.cadastrado = true;
    this.form.reset();
  }

  voltar() {
    this.cadastrado = false;    
  }

  voltarPagina() {
    window.history.go(-1);
  }

}
