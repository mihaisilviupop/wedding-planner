import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuntasiComponent } from './nuntasi.component';

describe('NuntasiComponent', () => {
  let component: NuntasiComponent;
  let fixture: ComponentFixture<NuntasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuntasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuntasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
