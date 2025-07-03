import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeListarComponent } from './personaje-listar.component';

describe('PersonajeListarComponent', () => {
  let component: PersonajeListarComponent;
  let fixture: ComponentFixture<PersonajeListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
