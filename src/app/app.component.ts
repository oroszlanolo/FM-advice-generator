import { Component, OnInit } from '@angular/core';
import { AdviceService } from './advice.service';
import { Advice } from './advice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  advice? : Advice;

  constructor(private adviceService: AdviceService) {}


  ngOnInit(): void {
    this.getNewAdvice();
  }
  
  getNewAdvice() {
    this.adviceService.getAdvice().subscribe(adv => this.advice = adv);
  }


}
