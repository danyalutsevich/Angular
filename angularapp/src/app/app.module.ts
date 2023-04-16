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
import { UppercasePipe } from './pipes/custom.pipe';
import { ImageComponent } from './components/image/image.component';
import { FormsModule } from '@angular/forms';
import { InputCarComponent } from './components/input-car/input-car.component';
import { ZoomDirective } from './directives/zoom.directive';
import { HeaderComponent } from './components/header/header.component';
import { CarCardsComponent } from './components/car-cards/car-cards.component'; 
import { DataProviderService } from './services/data-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './components/test-form/test-form.component';
import { BiggestMachineComponent } from './components/biggest-machine/biggest-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CounterComponent,
    ResumeComponent,
    HobbyComponent,
    UppercasePipe,
    ImageComponent,
    InputCarComponent,
    ZoomDirective,
    HeaderComponent,
    CarCardsComponent,
    TestFormComponent,
    BiggestMachineComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DataProviderService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
