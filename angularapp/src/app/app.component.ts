import { Component } from '@angular/core';
import type { ICar } from './models/ICar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularapp';
  cars: ICar[] = [
    {
      name: 'BMW',
      model: 'X5',
      year: 2015,
      color: 'red'
    },
    {
      name: 'Mercedes',
      model: 'C200',
      year: 2018,
      color: 'black'
    },
    {
      name: 'Audi',
      model: 'A6',
      year: 2019,
      color: 'white'
    }
  ]
  addCar(car: ICar) {
    this.cars.push(car);
  }

}
