import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list all the investiments', () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(3);
    expect(investiments[0].name).toContain('Itaú');
    expect(investiments[2].name).toContain('Nubank');
  });

  it('(I) should list all the investiments', () => {
    // Lembrete do querySelectorALl para quando mais um elemento tem a mesma classe, caso da lista
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(3);
    // O .trim() evita erro por espaçamento antes ou depois da palavra
    expect(investiments[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investiments[2].textContent.trim()).toContain('Nubank | 100');
  });
});
