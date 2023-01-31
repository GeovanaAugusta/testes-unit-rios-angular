import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { MOCK_LIST } from '../../services/list-investiments.mock';
import { InvestimentsI } from '../../model/investiments';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

  const mockList: Array<InvestimentsI> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list all the investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toEqual(5);

    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[0].value).toEqual(100);
    expect(component.investiments[4].name).toEqual('Banco 5');
    expect(component.investiments[4].value).toEqual(100);
  });

  it('(I) should list all the investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();
    // Lembrete do querySelectorALl para quando mais um elemento tem a mesma classe, caso da lista
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toEqual(5);;
    // O .trim() evita erro por espaçamento antes ou depois da palavra
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
