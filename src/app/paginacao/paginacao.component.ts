import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit, OnChanges {

  public static readonly TOTAL_PAGS_PADRAO: number = 5;
	public static readonly PAG_PADRAO: number = 1;
	public static readonly REG_PADRAO: number = 0;
	public static readonly ADJACENTES_PADRAO: number = 10;

  @Input() qtdPorPagina: number; // quantidade de registo por página
	@Input() totalRegistros: number; // total de registro encontrado no web service
	@Input() qtdAdjacentes: number; // quantidades de páginas que serão mostradas na paginação
	@Output() onPaginate: EventEmitter<number> = new EventEmitter<number>(); // evento enviado de click

  pagina: number;
	paginas: Array<number>;
	exibirProximo: boolean;
	qtdPaginas: number;

  constructor(/*private route: ActivatedRoute*/) { }

  ngOnInit() {
		this.qtdAdjacentes = this.qtdAdjacentes || PaginacaoComponent.ADJACENTES_PADRAO;
		this.qtdPorPagina = this.qtdPorPagina || PaginacaoComponent.TOTAL_PAGS_PADRAO;
		this.pagina = 1;		
		this.totalRegistros = this.totalRegistros || PaginacaoComponent.REG_PADRAO;
		this.qtdPaginas = Math.ceil(this.totalRegistros / this.qtdPorPagina);
		this.gerarLinks();
	 }

	 ngOnChanges() {
		 this.qtdPaginas = Math.ceil(this.totalRegistros / this.qtdPorPagina);
		 this.gerarLinks();
	 }

   gerarLinks() {
		this.exibirProximo = this.qtdPaginas !== this.pagina;
		this.paginas = [];
		let iniAdjacente = (this.pagina - this.qtdAdjacentes <= 0) ? 1 : 
				(this.pagina - this.qtdAdjacentes);
		let fimAdjacente = (this.pagina + this.qtdAdjacentes >= this.qtdPaginas) ? 
				this.qtdPaginas : (this.pagina + this.qtdAdjacentes);
		for (let i=iniAdjacente; i<=fimAdjacente; i++) {
			this.paginas.push(i);
		}
	}

  paginar(pagina: number/*, $event: any*/) {
		//$event.preventDefault();
		this.pagina = pagina;
		this.gerarLinks();
		this.onPaginate.emit(pagina);
	}

}
