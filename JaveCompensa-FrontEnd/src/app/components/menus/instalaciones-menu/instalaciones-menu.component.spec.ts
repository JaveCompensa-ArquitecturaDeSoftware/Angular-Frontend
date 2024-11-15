import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesMenuComponent } from './instalaciones-menu.component';

describe('InstalacionesMenuComponent', () => {
  let component: InstalacionesMenuComponent;
  let fixture: ComponentFixture<InstalacionesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstalacionesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalacionesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
