import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliation',
  templateUrl: './avaliation.component.html',
  styleUrls: ['./avaliation.component.scss']
})
export class AvaliationComponent implements OnInit {

  public overall = 0;
  public silence: number;
  public quality: number;

  constructor() { }

  ngOnInit(): void {
    this.quality = Number(localStorage.getItem('qualityAudio'));
    this.silence = Number(localStorage.getItem('silenceTime'));
    this.overall = (this.overall + this.quality) / 2;
  }

  changeColor(){
    if(this.overall <=50) {
      return 'warn';
    } else {
      return 'primary'
    }
  }

}
