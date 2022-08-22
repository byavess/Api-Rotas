import { Component, OnInit } from '@angular/core';
import { CoracaoService } from '../coracao.service';

@Component({
  selector: 'requisicao',
  templateUrl: './requisicao.component.html',
  styleUrls: ['./requisicao.component.css'],
  
})
export class RequisicaoComponent implements OnInit {

 infomacao!: Array<any>;
 // [{  "id": 1,    "name": "Geovanna"},
  //{  "id": 2,    "name": "Arthur"}];
  

  constructor(
    private coracaoService: CoracaoService,
   
  ) { }

  ngOnInit(): void {
   this.listar;
  }

  listar() {
    this.coracaoService.listar().subscribe(dados => this.infomacao = dados);
  
  
  
  }
}
