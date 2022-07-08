import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Student } from '../../models/Student';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  StudentModel: Student;

  constructor(private fb: FormBuilder) {
    this.StudentModel = new Student();
  }

  formNewStudent = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(2)]],
    nacimiento: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit() {
    console.log(this.formNewStudent)
  }

}
