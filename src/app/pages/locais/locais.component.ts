import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent {
  constructor( private router: Router, private messageService: MessageService) {
  }

  ofertas(){
    this.messageService.add({severity:'success', summary:'Candidatura efetuada!', detail:'Aguarde o retorno do empregador.'});
    this.router.navigate(['/ofertas']);
  }

}
