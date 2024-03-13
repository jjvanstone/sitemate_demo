import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssuesListComponent } from './issues-list/issues-list.component';



@NgModule({
  declarations: [
    IssuesListComponent,
    IssueFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    IssuesListComponent,
    IssueFormComponent
  ]
})
export class IssuesModule { }
