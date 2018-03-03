export default class Transaction {
  public amount: number;
  public currency = '';
  public source = '';
  public description = '';
  public positive: boolean;
  public date = '';
  public type = 'transaction';
  public opened = false;
  public display = true;
  constructor (data: Object) {
    this.amount = data['amount'];
    this.currency = data['currency'];
    this.source = data['source'];
    this.description = data['description'];
    this.positive = data['positive'];
    this.date = data['date'];
  }

}
