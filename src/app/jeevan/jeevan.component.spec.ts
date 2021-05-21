import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeevanComponent } from './jeevan.component';

describe('JeevanComponent', () => {
  let component: JeevanComponent;
  let fixture: ComponentFixture<JeevanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeevanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeevanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
