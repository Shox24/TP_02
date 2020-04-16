import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CameraPreviewPageRoutingModule } from './camera-preview-routing.module';

import { CameraPreviewPage } from './camera-preview.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { RouteReuseStrategy } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPreviewPageRoutingModule
  ],
  declarations: [CameraPreviewPage],
  providers: [CameraPreview, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class CameraPreviewPageModule {}
