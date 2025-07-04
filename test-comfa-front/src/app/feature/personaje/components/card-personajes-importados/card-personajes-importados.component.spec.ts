import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonajesImportadosComponent } from './card-personajes-importados.component';

describe('CardPersonajesImportadosComponent', () => {
  let component: CardPersonajesImportadosComponent;
  let fixture: ComponentFixture<CardPersonajesImportadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonajesImportadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPersonajesImportadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
