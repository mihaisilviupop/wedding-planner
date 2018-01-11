import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitatiNuntaComponent } from './invitati-nunta.component';

describe('InvitatiNuntaComponent', () => {
  let component: InvitatiNuntaComponent;
  let fixture: ComponentFixture<InvitatiNuntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitatiNuntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitatiNuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
