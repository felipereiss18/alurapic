import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

  }
}
