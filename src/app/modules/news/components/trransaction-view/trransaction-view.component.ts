import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Transaction from '../../models/transaction';

@Component({
  selector: 'app-trransaction-view',
  templateUrl: './trransaction-view.component.html',
  styleUrls: ['./trransaction-view.component.scss']
})
export class TrransactionViewComponent implements OnInit {

  @Input('current_transaction') current_transaction: Transaction;
  @Output()
  changeOn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public clickOpen() {
    this.current_transaction.opened = !this.current_transaction.opened ;
  }
  public deleteTransaction(event) {
    event.stopPropagation();
    this.changeOn.emit({data: 'hello'});
  }

}
