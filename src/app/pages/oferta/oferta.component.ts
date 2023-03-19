import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent {
  constructor( private router: Router, private messageService: MessageService) {
  }

  aceite(){
    this.messageService.add({severity:'success', summary:'Parabens, o emprego é seu!!', detail:'Vamos avisar o empregador e avisar as outras vagas que voce não está mais disponivel'});
    this.router.navigate(['/index']);
  }

}
