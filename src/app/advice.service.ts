import { Injectable } from '@angular/core';
import { Advice } from './advice';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  url = 'https://api.adviceslip.com/advice';

  constructor(private http : HttpClient) { }

  getAdvice() : Observable<Advice> {
    return this.http.get<Advice>(this.url);
  }
}
