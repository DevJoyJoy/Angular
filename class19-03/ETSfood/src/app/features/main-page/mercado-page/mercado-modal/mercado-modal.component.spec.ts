import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoModalComponent } from './mercado-modal.component';

describe('MercadoModalComponent', () => {
  let component: MercadoModalComponent;
  let fixture: ComponentFixture<MercadoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercadoModalComponent]
    });
    fixture = TestBed.createComponent(MercadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
