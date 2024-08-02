import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myForm: FormGroup = new FormGroup({});
  name = "";
  email = "";
  product = "";
  rate = "";
  review = "";

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      product: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(6), Validators.maxLength(6)]],
      rate: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(0), Validators.max(5)]],
      review: ['', [Validators.required]],
    })
  }

  submitForm() {
    console.log( "name: " + this.name + 
      "\nemail: " + this.email +
      "\nproduct: " + this.product +
      "\nrate: " + this.rate +
      "\nreview: " + this.review);
  }
}
