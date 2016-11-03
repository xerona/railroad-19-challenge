import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { data } from './mock-data';


@Injectable()
export class RecordsService {

  localData = data;
  records = new BehaviorSubject(data);

  constructor() {

  }

  filterRecords(textFilter = {}, dateFilter = {created: {startDate: '', endDate: ''}, modified: {startDate: '', endDate: ''}}) {
    this.records.next(this.localData
      .filter((value) => {
        let match = true;
        for (let key of Object.keys(textFilter)) {
          if (!`${value[key]}`.toLowerCase().includes(textFilter[key].toLowerCase())) {
            match = false;
            break;
          }
        }
        return match;
      })
      .filter((value) => {
        if (dateFilter.created.startDate.length > 0 && dateFilter.created.endDate.length > 0) {
          const startDate = new Date(dateFilter.created.startDate).getTime();
          const endDate = new Date(dateFilter.created.endDate).getTime();
          const valueDate = new Date(value.created).getTime();
          if (valueDate < startDate || valueDate > endDate) {
            return false;
          }
        }
        return true;
      })
      .filter((value) => {
        if (dateFilter.modified.startDate.length > 0 && dateFilter.modified.endDate.length > 0) {
          const startDate = new Date(dateFilter.modified.startDate).getTime();
          const endDate = new Date(dateFilter.modified.endDate).getTime();
          const valueDate = new Date(value.modified).getTime();
          if (valueDate < startDate || valueDate > endDate) {
            return false;
          }
        }
        return true;
      })
    );
  }

  data(textFilter = {}, dateFilter = {created: {startDate: '', endDate: ''}, modified: {startDate: '', endDate: ''}}) {
    return this.records;
  }

  save(dataSet) {
    for (let value of this.localData) {
      if (value.title === dataSet.title) {
        value = dataSet;
        return;
      }
    }
  }
}
