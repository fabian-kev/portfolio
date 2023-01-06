import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { components } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import {GoTopButtonModule} from 'ng-go-top-button';

@NgModule({
  declarations: [
    AppComponent,
    components,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatChipsModule,
    GoTopButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
