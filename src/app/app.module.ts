import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StamboomAanvullenComponent } from './stamboom-aanvullen/stamboom-aanvullen.component';
import { StamboomComponent } from './stamboom/stamboom.component';


@NgModule({
  declarations: [
    AppComponent,
    StamboomAanvullenComponent,
    StamboomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
