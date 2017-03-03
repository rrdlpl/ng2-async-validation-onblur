import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ValidationOnBlurDirective } from './validation.onblur.directive';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ValidationOnBlurDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    ReactiveFormsModule 
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
