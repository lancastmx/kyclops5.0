import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  slides = [
    {img:"https://kyclops.com/images/programas/CL-img.png"},
    {img:"https://kyclops.com/images/programas/DS-img.png"},
    {img:"https://kyclops.com/images/programas/KY-img.png"},
    {img:"https://kyclops.com/images/programas/LC-img.png"},
    {img:"https://kyclops.com/images/programas/RV-img.png"},
    {img:"https://kyclops.com/images/programas/SP-img.png"},
    {img:"https://kyclops.com/images/programas/SY-img.png"},
    {img:"https://kyclops.com/images/programas/KY-img.png"},
    {img:"https://kyclops.com/images/programas/KY-img.png"},
  ];

  slideConfig = {
    "slidesToShow": 7,
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "pauseOnHover": true,
    "infinite": true,
    "arrows" :false,

    "responsive":[
      {
        "breakpoint": 1040,
        "settings": {
          "arrows" :false,
          "infinite":true,
          "slidesToShow": 5,
          "slidesToScroll": 2,
        }
      },

      {
        "breakpoint": 768,
        "settings": {
          "arrows" :false,
          "infinite":true,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "swipeToSlide": true,
            "pauseOnHover": true
        }
      },
      {
        "breakpoint": 575,
        "settings": {
          "arrows" :false,
          "infinite":true,
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "swipeToSlide": true,
            "pauseOnHover": true
        }
      },
    ]
  }
}
