import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Speech2textComponent } from './speech2text.component';

describe('Speech2textComponent', () => {
  let component: Speech2textComponent;
  let fixture: ComponentFixture<Speech2textComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Speech2textComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Speech2textComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
