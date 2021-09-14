import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  $sendPrize = new EventEmitter();

  private _url = 'http://localhost:3000/prize';

  constructor(private http: HttpClient) { }

prizeCalculation(data1){
  this.http.post<any>(this._url, data1).toPromise().then(data => {this.$sendPrize.emit(data)});
 }
}