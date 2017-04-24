import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable()
export class VeiculosService {

  constructor() { }

  totalRegistros(): number {
		return this.listarTodos().length;
	}

  listarTodos(): Veiculo[] {
		let veiculos:string = sessionStorage['veiculos'];
		return veiculos ? JSON.parse(veiculos) : [];
	}

  listarParcial(pagina: number, qtdPorPagina: number): Veiculo[] {
		let storage: string = sessionStorage['veiculos'];
		let veiculos: Veiculo[] = storage ? JSON.parse(storage) : [];
		let veiculosParcial: Veiculo[] = [];
		for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
			if (i >= veiculos.length) {
				break;
			}
			veiculosParcial.push(veiculos[i]);
		}
		return veiculosParcial;
	}


  cadastrar(veiculo: Veiculo): void {
		let veiculos:Veiculo[] = this.listarTodos();
		veiculos.push(veiculo);
		sessionStorage['veiculos'] = JSON.stringify(veiculos);
	}

  buscarPorId(id: number):Veiculo {
		let veiculos:Veiculo[] = this.listarTodos();
		for (let veiculo of veiculos) {
			if (veiculo.id == id) {
				return veiculo;
			}
		}
		return new Veiculo();
	}

	buscarPorCombustivelOuMarca(search: string): Veiculo[] {
		let veiculos:Veiculo[] = this.listarTodos();
		let veiculosParcial: Veiculo[] = [];
		for (let veiculo of veiculos) {
			if (veiculo.combustivel.includes(search) || veiculo.marca.includes(search)) {
				veiculosParcial.push(veiculo);
			}
		}
		return veiculosParcial;
	}

	totalRegistrosPorCombustivelOuMarca(search: string): number {
		return this.buscarPorCombustivelOuMarca(search).length;
	}

  atualizar(id: number, veiculo: Veiculo): void {
		let veiculos:Veiculo[] = this.listarTodos();
		for (var i=0; i<veiculos.length; i++) {
			if (veiculos[i].id == id) {
				veiculos[i] = veiculo;
			}
		}
		sessionStorage['veiculos'] = JSON.stringify(veiculos);
	}

  excluir(id: number): void {
		let veiculos:Veiculo[] = this.listarTodos();
		let veiculosFinal:Veiculo[] = [];
		for (let veiculo of veiculos) {
			if (veiculo.id != id) {
				veiculosFinal.push(veiculo);
			}
		}
		sessionStorage['veiculos'] = JSON.stringify(veiculosFinal);
	}

}