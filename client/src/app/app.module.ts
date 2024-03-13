import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IssuesModule } from '../issues/issues.module';
import { IssuesService } from '../services/issues.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IssuesModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [IssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
