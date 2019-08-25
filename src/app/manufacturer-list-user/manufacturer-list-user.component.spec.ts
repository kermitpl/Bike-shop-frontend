import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerListUserComponent } from './manufacturer-list-user.component';

describe('ManufacturerListUserComponent', () => {
  let component: ManufacturerListUserComponent;
  let fixture: ComponentFixture<ManufacturerListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
