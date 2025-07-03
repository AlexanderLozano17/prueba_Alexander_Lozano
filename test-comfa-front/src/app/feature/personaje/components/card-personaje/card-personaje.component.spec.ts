import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonajeComponent } from './card-personaje.component';

describe('CardPersonajeComponent', () => {
  let component: CardPersonajeComponent;
  let fixture: ComponentFixture<CardPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
