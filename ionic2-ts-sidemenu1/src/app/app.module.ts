import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ScanPage } from '../pages/scan/scan';
import { ResultPage } from '../pages/result/result';
import { HttpModule } from '@angular/http';
import { Page3 } from '../pages/page3/page3';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    ScanPage,
    ResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,    
    ScanPage,
    ResultPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
