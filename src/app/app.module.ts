import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StamboomAanvullenComponent } from './stamboom-aanvullen/stamboom-aanvullen.component';
import { StamboomComponent } from './stamboom/stamboom.component';
import { VoorpaginaComponent } from './voorpagina/voorpagina.component';
import { ProgrammaComponent } from './programma/programma.component';
import {GojsAngularModule} from 'gojs-angular';
import { Stamboom2Component } from './stamboom2/stamboom2.component';
import { NgFamilyTreeModule } from './../assets/ng-family-tree';


@NgModule({
  declarations: [
    AppComponent,
    StamboomAanvullenComponent,
    StamboomComponent,
    VoorpaginaComponent,
    ProgrammaComponent,
    Stamboom2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GojsAngularModule,
    NgFamilyTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
