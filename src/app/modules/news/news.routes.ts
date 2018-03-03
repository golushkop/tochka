import { WatchEventsComponent } from './components/watch-events/watch-events.component';
import {EditEventsComponent} from './components/edit-events/edit-events.component';

export const NewsRoutes = [
  {
    path: '',
    component: WatchEventsComponent,
  },
  {
    path: 'edit',
    component: EditEventsComponent,
  }
];
