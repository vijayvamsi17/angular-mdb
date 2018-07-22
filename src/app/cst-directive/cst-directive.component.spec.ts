import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstDirectiveComponent } from './cst-directive.component';

describe('CstDirectiveComponent', () => {
  let component: CstDirectiveComponent;
  let fixture: ComponentFixture<CstDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
