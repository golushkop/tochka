import { Component, OnInit } from '@angular/core';
import {EventsDataService} from '../../services/events-data.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss']
})
export class EditEventsComponent implements OnInit {
  public _create = 'news';
  public new_event = {};
  constructor(public _data_storage: EventsDataService) { }

  ngOnInit() {
  }

  public createOptionChanged(value) {
    this._create = value;
    this.new_event = {};
  }

  public addNewPost(type) {
    if ((type === 'new' && this.new_event['header'] && this.new_event['description'] && this.new_event['date']) ||
      (type === 'transaction') && this.new_event['description'] && this.new_event['date']
      && this.new_event['currency'] && this.new_event['source'] && this.new_event['positive'] && this.new_event['amount']) {
      this.new_event['type'] = type;
      if (this.new_event['positive']) {
        this.new_event['positive'] = this.new_event['positive'] === 'true';
      }
      this._data_storage.add_events([this.new_event]);
    }
    this.new_event = {};
  }

}
