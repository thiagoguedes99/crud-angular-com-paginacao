import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { VeiculosService } from '../model/veiculos.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

	private readonly qtdPorPagina: number = 5;
  private veiculos: Veiculo[];
	private idExcluir: number;
	private pagina: number;
	private totalRegistros: number;

  constructor(private veiculoService: VeiculosService, private rota: Router) { }

  ngOnInit() {
		this.totalRegistros = this.veiculoService.totalRegistros();
		this.pagina = 1;    
		this.veiculos = this.veiculoService.listarParcial(
			--this.pagina, this.qtdPorPagina);
	}

   paginar($event: any) {
		this.pagina = $event - 1;
		this.veiculos = this.veiculoService.listarParcial(this.pagina, this.qtdPorPagina);
	}

  excluir(id: number) {
 		this.idExcluir = id;
 	}

   onExcluir() {
 		this.veiculoService.excluir(this.idExcluir);
 		location.reload();
 	}
	 
	 novo() {
      this.rota.navigate(['/novo']);
    }
}
