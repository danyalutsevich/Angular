import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  setPicture(picture:any) {
    this.picture = picture
  }

  setWidth(width:number) {
    this.width = width
  }

  width = 500;
  pictures = [
    {
      title: 'Monalisa',
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_natural_color.jpg',
      description: `La Gioconda, also known as the Mona Lisa, is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.`,
      creationYear: 1503,
      author: 'Leonardo da Vinci',
      size: '77 x 53 cm',
      location: 'Louvre, Paris'
    },
    {
      title: 'The Starry Night',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      description: `The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh\'s magnum opus, The Starry Night is one of the most recognized paintings in the history of Western culture.`,
      creationYear: 1889,
      author: 'Vincent van Gogh',
      size: '73 x 92 cm',
      location: 'Museum of Modern Art, New York'
    },
    {
      title: 'The Scream',
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
      description: `The Scream is an expressionist painting created by Norwegian artist Edvard Munch in 1893. It is one of the most famous paintings in the history of Western culture. The painting depicts a figure with an agonized expression against a landscape with a setting sun. It is in the collection of the Munch Museum in Oslo, Norway.`,
      creationYear: 1893,
      author: 'Edvard Munch',
      size: '91 x 73 cm',
      location: 'Munch Museum, Oslo'
    },
    {
      title: 'The Persistence of Memory',
      src: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      description: `The Persistence of Memory is a 1931 painting by Spanish surrealist artist Salvador Dalí. It depicts soft, pocket watch-like objects floating in a landscape of mountains and a coastline. The painting is one of Dalí\'s best-known works, and is often described as a representation of the persistence of memory, or the persistence of the past.`,
      creationYear: 1931,
      author: 'Salvador Dalí',
      size: '33 x 48 cm',
      location: 'Museum of Modern Art, New York'
    },
    {
      title: 'The Last Supper',
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
      description: `The Last Supper is a late 15th-century mural painting by Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. The painting represents the scene from the Gospel of John in which Jesus shares the Last Supper with his disciples. It is one of the most studied, written about, and reproduced paintings in the history of art.`,
      creationYear: '1495-1498',
      author: 'Leonardo da Vinci',
      size: '460 x 880 cm',
      location: 'Convent of Santa Maria delle Grazie, Milan'
    },
  ]
  picture = this.pictures[0];
}
