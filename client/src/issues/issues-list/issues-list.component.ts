import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issue';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {

  issues: Issue[] = [];

  constructor(private readonly issuesService: IssuesService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.issuesService.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }

  deleteIssue(id: number): void {
    this.issuesService.deleteIssue(id).subscribe(() => {
      this.refresh();
    });
  }

  updateIssue(issue: Issue): void {
    issue.title = `UPDATED: ${issue.title}`;
    issue.description = `UPDATED: ${issue.description}`;
    this.issuesService.updateIssue(issue).subscribe(() => {
      this.refresh();
    });
  }
}
