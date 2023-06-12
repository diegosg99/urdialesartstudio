import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaPagoComponent } from './plataforma-pago.component';

describe('PlataformaPagoComponent', () => {
  let component: PlataformaPagoComponent;
  let fixture: ComponentFixture<PlataformaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlataformaPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlataformaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
