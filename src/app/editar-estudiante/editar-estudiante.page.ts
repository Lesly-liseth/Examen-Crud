import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { EstudianteService } from './../shared/estudiante.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.page.html',
  styleUrls: ['./editar-estudiante.page.scss'],
})
export class EditarEstudiantePage implements OnInit {
  updateBookingForm: FormGroup;
  id: any;

  constructor(
    private aptService: EstudianteService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateBookingForm = this.fb.group({
      nombres: [''],
      apellidos: [''],
      nota1: [''],
      nota2: [''],
      nota3: [''],
      nota4: [''],
      nota5: ['']
    });
  }

  updateForm() {
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        // Redirigir a la página de inicio (Home) donde se encuentra la lista de estudiantes
        this.router.navigateByUrl('/home');
      })
      .catch(error => console.log(error));
  }
}
