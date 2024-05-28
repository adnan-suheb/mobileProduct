import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { TabComponent } from './shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
