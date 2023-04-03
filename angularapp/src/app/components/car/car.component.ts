import {Component} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent{
    title:string = 'Car Component';
    cars = ["audi","bmw","mercedes"]
}