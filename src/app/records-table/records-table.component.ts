import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecordsService } from '../shared/records.service';


@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent implements OnInit {

  records$;

  alerts:Array<Object> = [];

  textFilter = {};
  dateFilter = {created: {startDate: '', endDate: ''}, modified: {startDate: '', endDate: ''}};

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
    this.records$ = this.recordsService.data();
    this.filterRecords();
  }

  showAlert(alertData) {
    this.alerts = [];
    this.alerts.push(alertData);
    this.filterRecords();
  }

  filterList(textFilter) {
    this.textFilter = Object.assign({}, this.textFilter, textFilter);
    this.filterRecords();
  }

  filterListByDate(dateFilter) {
    this.dateFilter = Object.assign({}, this.dateFilter, dateFilter);
    this.filterRecords();
  }

  filterRecords() {
    this.recordsService.filterRecords(this.textFilter, this.dateFilter);
  }

  ludicrousMode() {
    setInterval("m=Math.random,n=document.all,n[~~(n.length * m())].style.background=`#${(~~(m()*0xFFFFFF)).toString(16)}`", 16);
    alert('Blame Craig! Refresh your browser to exit Ludicrous Mode.');
  }

}
