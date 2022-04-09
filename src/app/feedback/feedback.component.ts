import { NetlifyformsService } from '../netlify-forms/netlifyforms.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netliFlyFormService: NetlifyformsService
  ) {}

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
    this.erroMsg = '';
    console.log('closed');
  }

  onSubmit() {
    this.netliFlyFormService
      .submitFeedbackEntry(this.feedbackForm.value)
      .subscribe(
        () => {
          this.feedbackForm.reset();
          this.router.navigateByUrl('/success');
        },
        (err) => {
          this.erroMsg = err;
        }
      );
  }
}
