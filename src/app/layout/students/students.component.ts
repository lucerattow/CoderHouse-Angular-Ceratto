import { Component, OnInit } from '@angular/core';
import Alumno from '../../../scripts/Alumno'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  Alumnos: Array<Alumno>;

  constructor() {
    this.Alumnos = [
      new Alumno("Lucas", "Ceratto", new Date(1997, 9, 17), true),
      new Alumno("Santiago", "Celestre", new Date(1990, 6, 15), true),
      new Alumno("Julieth", "Sierra", new Date(1998, 3, 22), false),
      new Alumno("Nestor", "Yepez", new Date(1989, 11, 25), false),
    ]
  }

  ngOnInit(): void {
  }
}
