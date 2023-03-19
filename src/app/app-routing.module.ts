import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './pages/busca/busca.component';
import { ContaComponent } from './pages/conta/conta.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
