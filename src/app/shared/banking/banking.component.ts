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

  public setSacar(valor: string): number {
    const sacar = Number(valor);
    console.log(sacar);
    return sacar

  }

  public setDepositar(valor: string): number {
    const depositar = Number(valor);
    console.log(depositar);
    return depositar

  }

}
