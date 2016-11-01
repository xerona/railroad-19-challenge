import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { RecordsTableComponent } from './records-table/records-table.component';
import { RecordsRowComponent } from './records-row/records-row.component';
import { RecordsService } from './shared/records.service';
import { FiltersComponent } from './filters/filters.component';
import { DetailedRecordComponent } from './detailed-record/detailed-record.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordsTableComponent,
    RecordsRowComponent,
    FiltersComponent,
    DetailedRecordComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    appRoutes
  ],
  providers: [
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
