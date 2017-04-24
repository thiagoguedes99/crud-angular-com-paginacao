import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { VeiculosService } from './model/veiculos.service';
import { AppRoutingModule } from './app.routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    PaginacaoComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [VeiculosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
