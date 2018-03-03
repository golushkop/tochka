
export default class NewPost {
  public header = '';
  public description = '';
  public date = '';
  public viewed = false;
  public type = 'new';
  public opened = false;
  public display = true;
  constructor (data: Object) {
    this.header = data['header'];
    this.description = data['description'];
    this.date = data['date'];
  }

}
