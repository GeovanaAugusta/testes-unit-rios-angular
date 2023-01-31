import { Component, OnInit } from '@angular/core';
import { InvestimentsI } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments:Array<InvestimentsI> = [
    { name: "Itaú" , value: 100},
    { name: "Inter" , value: 100},
    { name: "Nubank" , value: 100},
  ];

  constructor() {}

  ngOnInit(): void {

  }

}
