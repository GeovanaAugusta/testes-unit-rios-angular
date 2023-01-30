import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): poupanca should have 10', () => {
    expect(component.getPoupanca).toEqual(10);
  })

  it('(U) getCarteira(): carteira should have 50', () => {
    expect(component.getPoupanca).toEqual(50);
  })

  it('(U) setSacar(): should transfer the value of poupanca from carteira', () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  })

  it('(U) setDepositar(): should transfer the value of carteira from poupanca', () => {
    component.setDepositar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  })
});
