import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { EventsDataService } from '../../services/events-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public selectedType: string;
  private sortDataIncrease = true;
  public activeRoute: string;
  @Output('create') create = new EventEmitter();
  public create_val = 'news';

  constructor(
    public _data_storage: EventsDataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.activeRoute = this._router.url.split('/')[this._router.url.split('/').length - 1];
    this._router.events.subscribe((data) => {
      const split_url = this._router.url.split('/');
      this.activeRoute = split_url[split_url.length - 1];
    })
  }

  ngOnInit() {
  }

  public typeFilterChanged(event) {
    this._data_storage.show_only_events(this.selectedType);
  }

  public sortByData() {
    this._data_storage.sort_by_data(this.sortDataIncrease);
    this.sortDataIncrease = !this.sortDataIncrease;
  }

  public goToEdit() {
    this._router.navigate(['edit'], {relativeTo: this._route.parent});
  }
  public goToActive() {
    this._router.navigate(['news']);
  }

  public createNew(type) {
    this.create_val = type;
    this.create.emit(type);
  }


}
