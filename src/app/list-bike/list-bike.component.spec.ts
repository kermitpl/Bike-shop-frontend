import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBikeComponent } from './list-bike.component';

describe('ListBikeComponent', () => {
  let component: ListBikeComponent;
  let fixture: ComponentFixture<ListBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
