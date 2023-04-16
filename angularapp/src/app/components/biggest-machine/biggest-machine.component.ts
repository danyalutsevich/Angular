import { Component } from '@angular/core';

@Component({
  selector: 'app-biggest-machine',
  templateUrl: './biggest-machine.component.html',
  styleUrls: ['./biggest-machine.component.scss']
})
export class BiggestMachineComponent {

  biggestCar: string = `
  Introducing the Behemoth: The Largest Car Ever Built
  In a world where size matters, the Behemoth reigns supreme as the largest car ever built. This colossal vehicle is a true engineering marvel that pushes the boundaries of automotive design and performance. From its massive proportions to its jaw-dropping features, the Behemoth is a testament to human ingenuity and innovation.
  Measuring an astonishing 50 feet in length, 20 feet in height, and 15 feet in width, the Behemoth is truly a titan on wheels. Its sheer size is enough to turn heads and leave bystanders in awe as it rolls down the road with an imposing presence. Despite its colossal dimensions, the Behemoth is powered by a cutting-edge hybrid propulsion system that combines a high-capacity electric motor with a powerful internal combustion engine, giving it unparalleled performance and efficiency.`;
  biggestPlane: string = `Unveiling the Colossus: The World's Largest Plane Takes Flight

  In the world of aviation, the Colossus stands tall as the biggest plane ever built, a marvel of aerospace engineering that defies the limits of size and scale. With its gargantuan proportions and groundbreaking features, the Colossus represents a bold leap forward in aviation technology, promising to revolutionize air travel and cargo transportation on a global scale.`;
  biggestShip: string = `Sailing the Seas of Majesty: Exploring the World's Largest Ship
  Behold the majesty of the world's largest ship, a marvel of maritime engineering that dominates the seas with its sheer size and impressive capabilities. This floating leviathan is a testament to human ingenuity, pushing the limits of shipbuilding and redefining the concept of what is possible on the open waters.`;

  currentMachine: string = 'Biggest Car';
  currentPrice: number = 0;

  setCar() {
    this.currentMachine = this.biggestCar;
    this.currentPrice = 100000;
  }

  setPlane() {
    this.currentMachine = this.biggestPlane;
    this.currentPrice = 1000000;
  }

  setShip() {
    this.currentMachine = this.biggestShip;
    this.currentPrice = 10000000;
  }



}
