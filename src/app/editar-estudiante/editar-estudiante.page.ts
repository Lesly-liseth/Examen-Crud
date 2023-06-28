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
        nota2: ['']
      })
      console.log(this.updateBookingForm.value)
    }
    updateForm() {
      this.aptService.updateBooking(this.id, this.updateBookingForm.value)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch(error => console.log(error));
    }
  }