import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderFormComponent } from './header-form/header-form.component';
import { DeleteComponent } from './landing-page/delete/delete.component';
import { EditComponent } from './landing-page/edit/edit.component';
import { ListSvcService } from './services/list-svc.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderFormComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ListSvcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
