import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransactionUserComponent } from './list-transaction-user.component';

describe('ListTransactionUserComponent', () => {
  let component: ListTransactionUserComponent;
  let fixture: ComponentFixture<ListTransactionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransactionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransactionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
