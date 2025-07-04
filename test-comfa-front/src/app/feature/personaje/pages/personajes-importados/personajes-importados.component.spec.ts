import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesImportadosComponent } from './personajes-importados.component';

describe('PersonajesImportadosComponent', () => {
  let component: PersonajesImportadosComponent;
  let fixture: ComponentFixture<PersonajesImportadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesImportadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonajesImportadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
