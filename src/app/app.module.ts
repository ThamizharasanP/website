import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CustomPageSliderComponent } from './directive/custom-page-slider/custom-page-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomPageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
