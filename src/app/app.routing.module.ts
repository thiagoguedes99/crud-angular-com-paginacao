import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const AppRouter: Routes = [
    {
        path: '',
        component: ListarComponent,
    },
    {
        path: 'novo',
        component: CadastrarComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRouter)],
    exports: [RouterModule]
})

export class AppRoutingModule {}