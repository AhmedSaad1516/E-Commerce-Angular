import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductedComponent } from './producted.component';

describe('ProductedComponent', () => {
  let component: ProductedComponent;
  let fixture: ComponentFixture<ProductedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
