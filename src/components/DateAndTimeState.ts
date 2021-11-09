import { action, observable } from 'mobx';

export class DateAndTimeState {
  @observable public date = new Date().toLocaleString();

  @action public setDate(date: string) {
    this.date = date;
  }
}
