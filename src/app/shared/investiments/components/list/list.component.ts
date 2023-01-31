import { Component, OnInit } from '@angular/core';
import { InvestimentsI } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

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

  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe((res) => console.log(res));
  }

}
