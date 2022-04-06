import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  feedbackForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    type: ['', Validators.required],
    description: ['', Validators.required],
    rating: [0, Validators.min(1)],
  });

  erroMsg = '';

  closeError() {
    this.erroMsg = ''
    console.log('clicou')
  }

  onSubmit(){}
}
