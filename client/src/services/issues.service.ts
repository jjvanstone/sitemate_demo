import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Issue } from "../models/issue";

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getIssues() {
    return this.httpClient.get<Issue[]>(`${this.baseUrl}/api/issues`);
  }

  createIssue(issue: Issue) {
    return this.httpClient.post<Issue>(`${this.baseUrl}/api/issues`, issue);
  }

  deleteIssue(id: number) {
    return this.httpClient.delete<void>(`${this.baseUrl}/api/issues/${id}`);
  }

  updateIssue(issue: Issue) {
    return this.httpClient.patch<Issue>(`${this.baseUrl}/api/issues/${issue.id}`, issue);
  }
}
