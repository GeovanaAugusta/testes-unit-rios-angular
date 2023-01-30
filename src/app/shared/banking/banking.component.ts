import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  private poupanca: number = 10;
  private carteira: number = 50;

  constructor () {}

  ngOnInit(): void { }

  get getPoupanca(): number {
  return this.poupanca
}

get getCarteira(): number {
  return this.carteira
}

  public setSacar(valor: string): number | undefined {
    const sacar = Number(valor);

    if(isNaN(sacar) || this.poupanca < sacar) {
    return;
  }

    this.poupanca -= sacar

    console.log(sacar);
    return this.carteira += sacar

  }

  public setDepositar(valor: string): number | undefined {
    const depositar = Number(valor);
    if(isNaN(depositar) || this.carteira < depositar) {
    return
  }

    console.log(depositar);
    this.carteira -= depositar;
    return this.poupanca += depositar;

  }

}
