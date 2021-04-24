import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliation',
  templateUrl: './avaliation.component.html',
  styleUrls: ['./avaliation.component.scss']
})
export class AvaliationComponent implements OnInit {

  public overall: number;

  constructor() { }

  ngOnInit(): void {
    this.overall = 45;
  }

  changeColor(){
    if(this.overall <=50) {
      return 'warn';
    } else {
      return 'primary'
    }
  }

}
