import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { ProductListtComponent } from './product-listt.component';

describe('ProductListtComponent', () => {
  let component: ProductListtComponent;
  let fixture: ComponentFixture<ProductListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListtComponent ]
=======
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
>>>>>>> 90d240746bc6955495909b5bc5077614a0d1fb58
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(ProductListtComponent);
=======
    fixture = TestBed.createComponent(ProductListComponent);
>>>>>>> 90d240746bc6955495909b5bc5077614a0d1fb58
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
