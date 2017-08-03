import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListtComponent } from './product-listt.component';

describe('ProductListtComponent', () => {
  let component: ProductListtComponent;
  let fixture: ComponentFixture<ProductListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
