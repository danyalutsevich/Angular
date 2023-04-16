import { Component } from '@angular/core';
import { DataProviderService } from '../../services/data-provider.service';

@Component({
  selector: 'app-car-cards',
  templateUrl: './car-cards.component.html',
  styleUrls: ['./car-cards.component.scss']
})
export class CarCardsComponent {
  
  posts: any[] =[];

  constructor(private readonly postService: DataProviderService) {  }
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }


}
