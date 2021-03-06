import { Component, OnInit } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.page.html',
  styleUrls: ['./camera-preview.page.scss'],
})
export class CameraPreviewPage implements OnInit {

  smallPreview:boolean;
  IMAGE_PATH: any;
  isToBack = false;
  constructor(
    private cameraPreview: CameraPreview
  ) { }
 
 
  ngOnInit() {
   }
 
   startCameraAbove(){
     this.isToBack = false;
    this.cameraPreview.startCamera({x: 80, y: 450, width: 250, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
  }
 
  startCameraBelow(){
    this.isToBack = true;
    this.cameraPreview.startCamera({x: 0, y: 50, width: window.screen.width, height: window.screen.height, camera: "front", tapPhoto: true, previewDrag: false, toBack: true});
  }
  
  stopCamera(){
    this.cameraPreview.stopCamera();
  }
 
  takePicture(){
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }
 
  switchCamera(){
    this.cameraPreview.switchCamera();
  }
 
  show(){
    this.cameraPreview.show();
  }
 
  hide(){
    this.cameraPreview.hide();
  }
 
}
 