import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadGeneralComponent } from './seguridad-general.component';

describe('SeguridadGeneralComponent', () => {
  let component: SeguridadGeneralComponent;
  let fixture: ComponentFixture<SeguridadGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
