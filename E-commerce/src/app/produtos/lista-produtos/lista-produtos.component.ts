import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html'
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos!: Produto[];

  ngOnInit() {
    this.produtoService
      .obterProdutos()
      .subscribe(listaProdutos => {
          this.produtos = listaProdutos;
          console.log(listaProdutos);
        }, 
        error => console.log(error)
      );
  }

}
