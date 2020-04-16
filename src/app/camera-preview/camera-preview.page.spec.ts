import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraPreviewPage } from './camera-preview.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

describe('CameraPreviewPage', () => {
  let component: CameraPreviewPage;
  let fixture: ComponentFixture<CameraPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPreviewPage ],
      imports: [IonicModule.forRoot()],
      providers: [CameraPreview]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
