import { Injectable } from '@angular/core';
import NewPost from '../models/new';
import Transaction from '../models/transaction';
import {GetDataService} from './get-data.service';

@Injectable()
export class EventsDataService {
  constructor(
    private _get_data: GetDataService
  ) { }

  public eventsTypes: Array<string> = [];

  public _events_list: Array<any> = [];



  public delete_from_event_list(event) {
    this._events_list = this._events_list.filter(x => x !== event);
  }

  public show_only_events(type) {
    this._events_list.forEach(x => {
      x.display = type ? x.type === type : true;
    })
  }

  public sort_by_data(increase) {
    this._events_list = this._events_list.sort((x, y) => {
      const date_x = new Date(x.date);
      const date_y = new Date(y.date);
      if (increase) {
        if (date_x > date_y) {
          return 1
        } else if (date_x < date_y) {
          return -1
        } else {
          return 0
        }
      } else {
        if (date_x > date_y) {
          return -1
        }
        else if (date_x < date_y) {
          return 1
        } else {
          return 0
        }
      }
    })
  }

  public add_new_news_post(data) {
    this._events_list.push(new NewPost(data))
  }

  public add_events(events: Array<any>) {
    events.forEach(x => {
      let event: any;
      if (x.type === 'new') {
        event = new NewPost(x);
      }
      else if (x.type === 'transaction') {
        event = new Transaction(x);
      }
      if (this.eventsTypes.indexOf(x.type) === -1) {
        this.eventsTypes.push(x.type);
      }
      this._events_list.push(event);
    })
  }

  public get_events() {
    this._get_data.get_events()
      .subscribe(
        (res: any) => {
          this._events_list = [];
          this.add_events(res);
        }
      )
  }

}
