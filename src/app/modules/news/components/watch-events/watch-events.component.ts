import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { EventsDataService } from '../../services/events-data.service';
import NewPost from '../../models/new';

@Component({
  selector: 'app-watch-news',
  templateUrl: './watch-events.component.html',
  styleUrls: ['./watch-events.component.scss']
})
export class WatchEventsComponent implements OnInit {
  public load = false;
  constructor(
    private _get_data: GetDataService,
    public _data_storage: EventsDataService
  ) { }

  ngOnInit() {
  }

  // public getEventsData() {
  //   this._get_data.get_events()
  //     .subscribe(
  //       (res: any) => {
  //         this._data_storage.add_events(res);
  //         this.load = false;
  //       }
  //     )
  // }

}
