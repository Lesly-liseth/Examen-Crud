import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstudiantePage } from './editar-estudiante.page';

describe('EditarEstudiantePage', () => {
  let component: EditarEstudiantePage;
  let fixture: ComponentFixture<EditarEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
