import { Injectable } from '@angular/core';
import { Estudiante } from './estudiante';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.bookingListRef = this.db.list('/estudiante');
  }
  // Create
  createBooking(apt: Estudiante) {
    return this.bookingListRef.push({
      nombres: apt.nombres,
      apellidos: apt.apellidos,
      nota1: apt.nota1,
      nota2: apt.nota2,
      nota3: apt.nota3,
      nota4: apt.nota4,
      nota5: apt.nota5,

    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/estudiante/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/estudiante');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Estudiante) {
    return this.bookingRef.update({
      nombres: apt.nombres,
      apellidos: apt.apellidos,
      nota1: apt.nota1,
      nota2: apt.nota2,
      nota3: apt.nota3,
      nota4: apt.nota4,
      nota5: apt.nota5,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/estudiante/' + id);
    this.bookingRef.remove();
  }
}
