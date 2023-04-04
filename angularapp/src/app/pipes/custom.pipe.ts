import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'uppercaseCustom'})
export class UppercasePipe implements PipeTransform {
    transform(value:string, args?:any):string {
        return value.toUpperCase();
    }
}