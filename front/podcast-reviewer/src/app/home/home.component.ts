import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message: string;
  public withMusic: boolean;
  public music: File;
  public type: string;

  constructor(public homeService: HomeService) { }

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
    this.music = files[0]
    this.type = files[0].type;
  }

  uploadPod(){
    let data = new FormData();
    data.append('type', this.type);
    data.append('file', this.music);
    console.log(data)
    this.homeService.uploadPod(data).subscribe(metrics => {console.log(metrics)})
  }

}
