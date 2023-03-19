import { Component } from '@angular/core';

@Component({
  selector: 'app-buscadetalhada',
  templateUrl: './buscadetalhada.component.html',
  styleUrls: ['./buscadetalhada.component.scss']
})
export class BuscadetalhadaComponent {

  filterSearch:any;
  filteredData: any[] = [];

  vagas: any[] = [
    {
      title: 'Engenharia Civil',
    },
    {
      title: 'Engenharia da Computação',
    },
    {
      title: 'Engenharia da computação',
    },

    {
      title: 'Engenharia Eletrica',
    },

    {
      title: 'Engenharia Ambiental',
    },

    {
      title: 'Engenharia Redes',
    },

    {
      title: 'Engenharia Produção',
    },

    {
      title: 'Engenharia Mecãnica',
    },

    {
      title: 'Engenheiro de Qualidade',
    },
    {
      title: 'Administração de empresas',
    },
    {
      title: 'Desenvolvedor de Software',
    },
    {
      title: 'Advogado',
    },
    {
      title: 'Designer de conteúdo',
    },
    {
      title: 'Enfermeiro(a) intensivista',
    },
    {
      title: 'Coordenador de vendas',
    },
    {
      title: 'Design de produto',
    },
    {
      title: 'Analista de gestão de riscos',
    },
    {
      title: 'Analista de soluções',
    },
    {
      title: 'Enfermeira',
    },
    {
      title: 'Medico Geral',
    },
    {
      title: 'Clinico geral',
    },
    {
      title: 'Consultor de dados',
    },
    {
      title: 'Motorista',
    },
    {
      title: 'Cozinheiro',
    },
    {
      title: 'Auxiliar de escitório',
    },
    {
      title: 'Faxineiro',
    },
  ];

  searchData(searchValue: any) {
    this.filteredData = this.vagas.filter((item: any) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  getTotal(){
    return Math.round(Math.random() * 300) + 10;
  }
}
