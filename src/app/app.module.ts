import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CaseInboxComponent } from './case-inbox/case-inbox.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { SearchCaseComponent } from './search-case/search-case.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseInboxComponent,
    CaseDetailsComponent,
    RequestViewComponent,
    SearchCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
