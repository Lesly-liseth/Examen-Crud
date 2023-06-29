import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EstudianteService } from './../shared/estudiante.service';
@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.page.html',
  styleUrls: ['./crear-estudiante.page.scss'],
})
export class CrearEstudiantePage implements OnInit {

  bookingForm: FormGroup;
  constructor(
    private aptService: EstudianteService,
    private router: Router,
    public fb: FormBuilder
  ) {}
  ngOnInit() {
    this.bookingForm = this.fb.group({
      nombres: [''],
      apellidos: [''],
      nota1: [''],
      nota2: [''],
      nota3: [''],
      nota4: [''],
      nota5: [''],
    });
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }
}
