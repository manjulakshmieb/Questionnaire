import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ques1Page } from './ques1.page';

describe('Ques1Page', () => {
  let component: Ques1Page;
  let fixture: ComponentFixture<Ques1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ques1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
