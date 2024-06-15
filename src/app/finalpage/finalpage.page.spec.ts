import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalpagePage } from './finalpage.page';

describe('FinalpagePage', () => {
  let component: FinalpagePage;
  let fixture: ComponentFixture<FinalpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
