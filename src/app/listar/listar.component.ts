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
		this.veiculos = this.veiculoService.listarParcial(--this.pagina, this.qtdPorPagina);
	}

   paginar($event: any) {
		this.pagina = $event - 1;
		this.veiculos = this.veiculoService.listarParcial(this.pagina, this.qtdPorPagina);
	}
	 
	 novo() {
      this.rota.navigate(['/novo']);
    }

	buscarCombusMarca(busca: string) {
		if (busca.length < 1) {
			this.ngOnInit();	
		} else {
			this.totalRegistros = this.veiculoService.totalRegistrosPorCombustivelOuMarca(busca);
			this.veiculos = this.veiculoService.buscarPorCombustivelOuMarca(busca);			
		}
	}

  excluir(id: number) {
 		this.idExcluir = id;
 	}

   onExcluir() {
 		this.veiculoService.excluir(this.idExcluir);
 		location.reload();
 	}
}
