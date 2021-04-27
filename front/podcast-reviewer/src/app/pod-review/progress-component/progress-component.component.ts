import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.scss']
})
export class ProgressComponentComponent implements OnInit {

  @Input() metric: string;
  @Input() overall: number;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    if(this.overall <= 50) {
      return 'warn';
    } else {
      return 'primary'
    }
  }

}
