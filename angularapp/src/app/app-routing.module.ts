import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ImageComponent } from './components/image/image.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CarCardsComponent } from './components/car-cards/car-cards.component';
import { BiggestMachineComponent } from './components/biggest-machine/biggest-machine.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'image',
    component: ImageComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'carCards',
    component: CarCardsComponent
  },
  {
    path: 'machine',
    component: BiggestMachineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
