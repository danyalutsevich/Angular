import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {
  hobby:string = 'Badminton';
  description:string = `Badminton is a fast-paced racket sport played on a court divided by a net. It can be played individually or in pairs, and the objective is to hit a shuttlecock over the net and land it in the opponent's court in a way that they are unable to return the shot. The shuttlecock, also known as a birdie or shuttle, is a small, feathered projectile with a rounded cork base. Badminton requires quick reflexes, agility, and a combination of technical skills such as overhead smashes, drops, clears, and net shots. The game is typically played in a best-of-three or best-of-five format and is popular in many countries around the world. It is an excellent form of physical exercise and can be enjoyed both competitively and recreationally.`
}
