import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { ContaComponent } from './pages/conta/conta.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BuscaComponent } from './pages/busca/busca.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { VagaComponent } from './pages/vaga/vaga.component';
import { OfertaComponent } from './pages/oferta/oferta.component';
import { HeaderComponent } from './comps/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
    ContaComponent,
    PerfilComponent,
    BuscaComponent,
    OfertasComponent,
    VagaComponent,
    OfertaComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
