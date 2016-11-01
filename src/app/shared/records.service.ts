import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { data } from './mock-data';


@Injectable()
export class RecordsService {

  constructor() { }

  data(textFilter = {}, dateFilter = {created: {startDate: '', endDate: ''}, modified: {startDate: '', endDate: ''}}) {
    console.log(textFilter);
    return Observable.from([data])
    .map((values) => {
      let filteredArray = [];
      for (let value of values) {
        let match = true;
        for (let key of Object.keys(textFilter)) {
          if (!`${value[key]}`.toLowerCase().includes(textFilter[key].toLowerCase())) {
            match = false;
            break;
          }
        }
        match && filteredArray.push(value);
      }
      return filteredArray;
    })
    .map((values) => {
      let filteredArray = [];
      if (dateFilter.created.startDate.length > 0 && dateFilter.created.endDate.length > 0) {
        const startDate = new Date(dateFilter.created.startDate).getTime();
        const endDate = new Date(dateFilter.created.endDate).getTime();
        for (let value of values) {
          const valueDate = new Date(value.created).getTime();


          if (valueDate >= startDate && valueDate <= endDate) {
            filteredArray.push(value);
          }
        }
        return filteredArray;
      }
      return values;
    })
    .map((values) => {
      let filteredArray = [];
      if (dateFilter.modified.startDate.length > 0 && dateFilter.modified.endDate.length > 0) {
        const startDate = new Date(dateFilter.modified.startDate).getTime();
        const endDate = new Date(dateFilter.modified.endDate).getTime();
        for (let value of values) {
          const valueDate = new Date(value.modified).getTime();
          if (valueDate >= startDate && valueDate <= endDate) {
            filteredArray.push(value);
          }
        }
        return filteredArray;
      }
      return values;
    });
  }

}
