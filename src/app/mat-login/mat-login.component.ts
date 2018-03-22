import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-mat-login',
  templateUrl: './mat-login.component.html',
  styleUrls: ['./mat-login.component.css']
})
export class MatLoginComponent implements OnInit {

  matLoginForm: FormGroup

  constructor(private builder:FormBuilder, private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.matLoginForm = this.builder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login()
  {
    alert('Success!');
    this.snackbar.open('test','Undo', {
      duration: 3000});
  }

}
