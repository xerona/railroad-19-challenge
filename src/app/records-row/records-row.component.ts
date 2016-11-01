import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-records-row',
  templateUrl: './records-row.component.html',
  styleUrls: ['./records-row.component.scss']
})
export class RecordsRowComponent implements OnInit {

  @Input() record;
  @Output() recordChange = new EventEmitter();

  edit = false;
  recordClean;

  constructor() { }

  ngOnInit() { }

  enableEdit() {
    this.recordClean = Object.freeze(Object.assign({}, this.record));
    this.edit = true;
  }

  cancelEdit() {
    this.record = Object.assign({}, this.recordClean);
    this.edit = false;
  }

  saveChanges() {
    this.recordClean = void 0;
    this.edit = false;
    this.recordChange.emit({msg: `${this.record.title}, was updated successfully!`});
  }

}
