import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuccessComponent } from './success/success.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', component: FeedbackComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
