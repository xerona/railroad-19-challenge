import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-record',
  templateUrl: './detailed-record.component.html',
  styleUrls: ['./detailed-record.component.scss']
})
export class DetailedRecordComponent implements OnInit {

  recordTitle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((p: any) => {
        this.recordTitle = p.title;
      });
  }

}
