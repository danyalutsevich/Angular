import { Component, Output, EventEmitter } from '@angular/core';
import type { ICar } from '../../models/ICar';

@Component({
  selector: 'app-input-car',
  templateUrl: './input-car.component.html',
  styleUrls: ['./input-car.component.scss']
})
export class InputCarComponent {
  @Output() outCar = new EventEmitter<ICar>();

  addCar(name: HTMLInputElement, model: HTMLInputElement, year: HTMLInputElement, color: HTMLInputElement): void {
    this.outCar.emit({
      name: name.value,
      model: model.value,
      year: Number(year.value),
      color: color.value
    });
  }

}
