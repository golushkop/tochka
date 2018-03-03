import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchEventsComponent } from './components/watch-events/watch-events.component';
import { RouterModule } from '@angular/router';
import { NewsRoutes } from './news.routes';
import { GetDataService } from './services/get-data.service';
import { EventsDataService } from './services/events-data.service';
import { NewViewComponent } from './components/new-view/new-view.component';
import { TrransactionViewComponent } from './components/trransaction-view/trransaction-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { EditEventsComponent } from './components/edit-events/edit-events.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NewsRoutes),
    SharedModule,
  ],
  declarations: [
    WatchEventsComponent,
    NewViewComponent,
    TrransactionViewComponent,
    HeaderComponent,
    EditEventsComponent
  ],
  providers: [
    GetDataService,
    EventsDataService
  ]
})
export class NewsModule { }
