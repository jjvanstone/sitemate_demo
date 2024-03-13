import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent {

  issueForm: FormGroup = this.fb.group({
    title: '',
    description: '',
  });

  constructor(
    private readonly issuesService: IssuesService,
    private readonly fb: FormBuilder,
  ) { }

  submitIssue(): void {
    console.log('SUBMIT!');
    this.issuesService.createIssue(this.issueForm.value).subscribe(() => {
      this.issueForm.reset();
    });
  }
}
