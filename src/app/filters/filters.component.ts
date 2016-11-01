import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecordDateFilter } from '../shared/record-date-filter';
import { RecordTextFilter } from '../shared/record-text-filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() filterChange = new EventEmitter();
  @Output() dateFilterChange = new EventEmitter();

  toggleText = "Filter Table Data";
  filtersShown = false;
  dateFilter = {
    created: {
      startDate: '',
      endDate: ''
    },
    modified: {
      startDate: '',
      endDate: ''
    }
  };
  textFilter = {
    title: '',
    division: '',
    owner: '',
    budget: '',
    status: ''
  };

  constructor() { }

  ngOnInit() { }

  toggleFilters() {
    if (this.filtersShown) {
      this.toggleText = "Filter Table Data";
    } else {
      this.toggleText = "Hide Filters";
    }
    this.filtersShown = !this.filtersShown;
  }

}
