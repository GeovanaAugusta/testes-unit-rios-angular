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
    expect(component.getCarteira).toEqual(50);
  })

  it('(U) setSacar(): should transfer the value of poupanca from carteira', () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  })

  it('(U) setSacar(): should not receive a string or a value that be bigger than poupanca', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })

  it('(U) setDepositar(): should transfer the value of carteira from poupanca', () => {
    component.setDepositar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  })

  it('(U) setDepositar(): should not receive a string or a value that be bigger than carteira', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })
});

// Para a cobertura, há duas maneiras:
// ng test --code-coverage
// Indo até o componente html dentro da pasta coverage e usando o go live
