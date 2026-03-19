import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommidaComponent } from './commida.component';

describe('CommidaComponent', () => {
  let component: CommidaComponent;
  let fixture: ComponentFixture<CommidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommidaComponent]
    });
    fixture = TestBed.createComponent(CommidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
