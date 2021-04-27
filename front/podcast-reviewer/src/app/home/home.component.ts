import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message: string;
  public withMusic: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  typeValidator(files) {
    this.message = '';
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;

    if (mimeType.match(/audio\/*/) == null) {
      this.withMusic = false;
      this.message = "Só suportamos audio";
      return;
    }
    this.withMusic = true;
  }

  uploadPod(){}

}
