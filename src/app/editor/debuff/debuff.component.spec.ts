import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuffComponent } from './debuff.component';

describe('DebuffComponent', () => {
  let component: DebuffComponent;
  let fixture: ComponentFixture<DebuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
