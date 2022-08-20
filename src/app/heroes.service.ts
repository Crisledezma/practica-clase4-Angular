import { Injectable } from '@angular/core';
import { Heroe } from './heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [
    {heroeName: 'Superman',
      realName: 'Kal-El',
      image: 'https://m.media-amazon.com/images/I/811AALzJgWL._AC_SL1024_.jpg'
    },
    {heroeName: 'Batman',
      realName: 'Bruce Wayne',
      image: 'https://www.ecccomics.com/content/productos/9854/Batman_111_56_1a_cubierta.jpg'
    },
    {heroeName: 'Flash',
      realName: 'Barry Allen',
      image: 'https://3.bp.blogspot.com/-2r9FMmEthcE/VYrCcfBuwfI/AAAAAAAAH1c/zJKuWbTD33g/s1600/flash%2Bnew%2B52%2B0.jpg'
    },
    {heroeName: 'Green Arrow',
      realName: 'Oliver Queen',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91g-MHZPQzS.jpg'
    },
    {heroeName: 'Cat Woman',
      realName: 'Selina Kyle',
      image: 'https://www.izicomics.com/wp-content/uploads/2021/06/Catwoman-Guardian-of-Gotham-comic.jpg'
    },
    
  ];

  constructor() { }
}
