import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

vagas:any[] = [
  {
    icon:"fa fa-bolt",
    title:"Engenharia Eólica",
    total:"152",
  },
  {
    icon:"fa fa-microchip",
    title:"Engenharia Eletrica",
    total:"251",
  },
  {
    icon:"fa fa-cog",
    title:"Engenharia Produção",
    total:"152",
  },
  {
    icon:"fa fa-home",
    title:"Bombeiro hidraulico",
    total:"152",
  },
  {
    icon:"fa fa-gamepad",
    title:"Desenvolvedor Jogos",
    total:"54",
  },
  {
    icon:"fa fa-car",
    title:"Mecânico de veículos",
    total:"76",
  },
  {
    icon:"fa fa-motorcycle",
    title:"Entregador",
    total:"205",
  },
  {
    icon:"fa fa-university",
    title:"Engenheiro civil",
    total:"54",
  },
  {
    icon:"fa fa-paw",
    title:"Veterinário",
    total:"22",
  },
  {
    icon:"fa fa-graduation-cap",
    title:"Professor",
    total:"107",
  },
]

}
