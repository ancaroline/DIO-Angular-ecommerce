import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingStoreAppComponent } from './clothing-store-app.component';

describe('ClothingStoreAppComponent', () => {
  let component: ClothingStoreAppComponent;
  let fixture: ComponentFixture<ClothingStoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingStoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothingStoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
