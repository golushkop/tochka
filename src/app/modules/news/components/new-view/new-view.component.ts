import {Component, Input, OnInit, Output} from '@angular/core';
import NewPost from '../../models/new';

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.component.html',
  styleUrls: ['./new-view.component.scss']
})
export class NewViewComponent implements OnInit {
  @Input('current_new_post') current_new_post: NewPost;

  constructor() { }

  ngOnInit() {
  }

  public clickOpen() {
    this.current_new_post.opened = !this.current_new_post.opened ;
  }
  public markAsRead(event) {
    event.stopPropagation();
    this.current_new_post.viewed = true;
  }

}
