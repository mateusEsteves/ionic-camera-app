import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class FotoProvider {

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetHeight: 1000,
    targetWidth: 1000,
    correctOrientation: true
  }

  constructor(public camera: Camera) {
    console.log('FotoProvider Loaded');
  }

  /* Pode ser usado direto no Component para tirar a foto */
  // public takePicture() {
  //     this.camera.getPicture(this.options).then((image_data) =>{
  //       return 'data:image/jpeg;base64,' + image_data;
  //     }, (err) => {
  //       console.log(err);
  //     }
  //   );    
  // }

  public takePicture(): Promise<any>{
    return new Promise((resolve) =>{
      this.camera.getPicture(this.options).then((image_data) =>{
        let img_str = 'data:image/jpeg;base64,' + image_data;
        let promise = {"img_str": img_str, "error": false};
        resolve(promise);
      }, (err) => {
        console.log(err);
      })
    });
  }
}
