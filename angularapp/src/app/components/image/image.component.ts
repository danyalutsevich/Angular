import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Internet_map_1024.jpg';
  imageSrc2 = 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Rose_chafers_%28Cetonia_aurata%29_on_thistle_%28Carduus_sp.%29.jpg';
  src = this.imageSrc;
  text =""
  constructor() {
    setInterval(() => {
      if (this.src == this.imageSrc) {
        this.src = this.imageSrc2;
      }
      else {
        this.src = this.imageSrc;
      }
    }, 3000)
  }

  changeValue(ev: any) {
    this.text = ev.target.value;
    console.log(ev.target.value);
  }
}
