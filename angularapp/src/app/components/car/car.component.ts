import {Component,Input} from '@angular/core';
import type {ICar} from '../../models/ICar';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent{

    @Input() car:ICar={name:'',model:'',year:0,color:''};
    
 
}