import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CarComponent } from './components/car/car.component';
import { CounterComponent } from './components/counter/counter.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HobbyComponent } from './components/hobby/hobby.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    ResumeComponent,
    HobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
