import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstPipeComponent } from './cst-pipe.component';

describe('CstPipeComponent', () => {
  let component: CstPipeComponent;
  let fixture: ComponentFixture<CstPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
