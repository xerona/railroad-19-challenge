import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecordsService } from '../shared/records.service';
import { RecordDateFilter } from '../shared/record-date-filter';
import { RecordTextFilter } from '../shared/record-text-filter';


@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent implements OnInit {

  records$: Observable<{}[]>;

  alerts:Array<Object> = [];

  textFilter = {};
  dateFilter = {created: {startDate: '', endDate: ''}, modified: {startDate: '', endDate: ''}};

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
    this.fetchRecords();
  }

  showAlert(alertData) {
    this.alerts = [];
    this.alerts.push(alertData);
  }

  filterList(textFilter) {
    this.textFilter = Object.assign({}, this.textFilter, textFilter);
    this.fetchRecords();
  }

  filterListByDate(dateFilter) {
    this.dateFilter = Object.assign({}, this.dateFilter, dateFilter);
    this.fetchRecords();
  }

  fetchRecords() {
    this.records$ = this.recordsService.data(this.textFilter, this.dateFilter);
  }

}
