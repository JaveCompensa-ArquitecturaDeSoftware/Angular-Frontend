import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeSelectorComponent } from './sede-selector.component';

describe('SedeSelectorComponent', () => {
  let component: SedeSelectorComponent;
  let fixture: ComponentFixture<SedeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
