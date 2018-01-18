import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuntasNouComponent } from './nuntas-nou.component';

describe('NuntasNouComponent', () => {
  let component: NuntasNouComponent;
  let fixture: ComponentFixture<NuntasNouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuntasNouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuntasNouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
