import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarquiaComponent } from './hierarquia.component';

describe('HierarquiaComponent', () => {
  let component: HierarquiaComponent;
  let fixture: ComponentFixture<HierarquiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarquiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
