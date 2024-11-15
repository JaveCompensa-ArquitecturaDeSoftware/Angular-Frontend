import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedesMenuComponent } from './sedes-menu.component';

describe('SedesMenuComponent', () => {
  let component: SedesMenuComponent;
  let fixture: ComponentFixture<SedesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SedesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SedesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
