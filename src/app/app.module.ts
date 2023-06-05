import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbDatepickerModule,
  NbMenuModule,
  NbSidebarModule,
  NbDialogModule,
  NbThemeModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'material-light' }),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
