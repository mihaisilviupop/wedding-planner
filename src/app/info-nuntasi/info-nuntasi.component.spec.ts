import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNuntasiComponent } from './info-nuntasi.component';

describe('InfoNuntasiComponent', () => {
  let component: InfoNuntasiComponent;
  let fixture: ComponentFixture<InfoNuntasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNuntasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNuntasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
