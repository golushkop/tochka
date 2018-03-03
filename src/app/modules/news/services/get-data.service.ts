import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GetDataService {
  private description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
    'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
    'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ' +
    'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
    'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  private events = [
    {
      description: this.description,
      header: 'NewPost #1',
      date: '1994-04-13T12:22:30',
      type: 'new',
      id: 'N1'
    },
    {
      description: this.description,
      amount: 4500,
      date: '1994-02-25T12:22:30',
      type: 'transaction',
      currency: 'USD',
      source: 'Ray Bradberry',
      positive: true,
      id: 'T1'
    },
    {
      description: this.description,
      header: 'NewPost #2',
      date: '1994-01-23T12:22:30',
      type: 'new',
      id: 'N2'
    },
    {
      description: this.description,
      header: 'NewPost #3',
      date: '1994-01-12T12:22:30',
      type: 'new',
      id: 'N3'
    },
    {
      description: this.description,
      amount: 5000,
      date: '1994-04-30T12:22:30',
      type: 'transaction',
      currency: 'RUB',
      source: 'Paul MacCartney',
      positive: false,
      id: 'T2'
    },
  ]


  constructor() { }

  public get_events(): Observable<any> {
    const result = new Observable ((observer) => {
      observer.next(this.events);
      observer.complete();
    });
    return result;
  }
}
