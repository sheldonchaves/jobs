import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent {

  constructor( private router: Router, private messageService: MessageService) {
  }

  ofertas(){
    this.messageService.add({severity:'success', summary:'Candidatura efetuada!', detail:'Aguarde o retorno do empregador.'});
    this.router.navigate(['/ofertas']);
  }

}

