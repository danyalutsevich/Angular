import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ImageComponent } from './components/image/image.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {
    path:'counter',
    component: CounterComponent
  },
  {
    path:'image',
    component:ImageComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
