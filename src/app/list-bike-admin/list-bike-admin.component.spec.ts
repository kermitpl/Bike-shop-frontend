import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBikeAdminComponent } from './list-bike-admin.component';

describe('ListBikeAdminComponent', () => {
  let component: ListBikeAdminComponent;
  let fixture: ComponentFixture<ListBikeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBikeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBikeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
