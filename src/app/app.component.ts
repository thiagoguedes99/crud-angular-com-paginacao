import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  carros = [
    { "combustivel" : "Flex",
      "imagem" : null,
      "marca" : "Volkswagem",
      "modelo" : "Gol",
      "placa" : "FFF-5498",
      "valor" : 20000
      },
      { "combustivel" : "Gasolina",
      "imagem" : null,
      "marca" : "Volkswagem",
      "modelo" : "Fox",
      "placa" : "FOX-4125",
      "valor" : 20000
      },
      { "combustivel" : "Alcool",
      "imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
      "marca" : "Volkswagen",
      "modelo" : "Fusca",
      "placa" : "PAI-4121",
      "valor" : 20000
      }
  ]; 

  constructor() {

  }   
    
    ngOnInit(): void {
      /* descomentar a linha para ter a carga inicial de dados */

		//sessionStorage['veiculos'] = JSON.stringify(this.carros);
    }
}
