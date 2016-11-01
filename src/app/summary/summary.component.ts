import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() records;

  statuses = [];

  constructor() { }

  ngOnInit() {
    let data = {};
    for (let record of this.records) {
      data[record.status] = data[record.status] || {};
      data[record.status]['budget'] = data[record.status]['budget'] || 0;
      data[record.status]['total'] = data[record.status]['total'] || 0;
      data[record.status]['divisions'] = data[record.status]['divisions'] || {};
      data[record.status]['divisions'][record.division] = data[record.status]['divisions'][record.division] || {};
      data[record.status]['divisions'][record.division]['budget'] = data[record.status]['divisions'][record.division]['budget'] || 0;
      data[record.status]['divisions'][record.division]['total'] = data[record.status]['divisions'][record.division]['total'] || 0;

      data[record.status]['budget'] += record.budget;
      data[record.status]['divisions'][record.division]['budget'] += record.budget;

      data[record.status]['total'] += 1;
      data[record.status]['divisions'][record.division]['total'] += 1;
    }

    for (let summary of Object.keys(data)) {
      let divisions = []
      for (let division of Object.keys(data[summary]['divisions'])) {
        divisions.push({
          name: division,
          budget: data[summary]['divisions'][division]['budget'],
          total: data[summary]['divisions'][division]['total'],
        });
      }
      this.statuses.push({
        name: summary,
        budget: data[summary]['budget'],
        total: data[summary]['total'],
        divisions: divisions
      });
    }
    console.log(this.statuses);
  }

}
