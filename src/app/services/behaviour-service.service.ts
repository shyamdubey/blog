import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourServiceService {

  constructor() { }
  private serialNumber = new BehaviorSubject<string>("Initial Value");
  serialNumberBehaviour$ = this.serialNumber.asObservable();

  updateValue(value:string){
    this.serialNumber.next(value);
  }
}
