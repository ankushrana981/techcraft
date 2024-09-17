import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY,RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaV3Module
  ],
  providers: [
    provideClientHydration(),
    {
      provide:RECAPTCHA_V3_SITE_KEY,
      useValue:"6Lc8WnMpAAAAAE2lOgGInyjONKgvWYJwGk012gbL"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
