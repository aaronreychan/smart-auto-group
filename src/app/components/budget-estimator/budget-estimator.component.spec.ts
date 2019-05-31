import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEstimatorComponent } from './budget-estimator.component';

describe('BudgetEstimatorComponent', () => {
  let component: BudgetEstimatorComponent;
  let fixture: ComponentFixture<BudgetEstimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetEstimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
