import { FotoProvider } from './../../providers/foto/foto';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FotoProvider]
})
export class HomePage {

  img_base64: any;

  

  constructor(public navCtrl: NavController, public foto: FotoProvider) {
    console.log('HomeComponent Loaded');
  }

  public addPicture(): void {
    this.foto.takePicture().then((data) => {
      this.img_base64 = data.img_str;
    });
  }


}
