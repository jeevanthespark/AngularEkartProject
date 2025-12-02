import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNowComponent } from './order-now.component';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';

describe('OrderNowComponent', () => {
  let component: OrderNowComponent;
  let fixture: ComponentFixture<OrderNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNowComponent ,
      MatFormFieldModule,MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
