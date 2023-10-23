import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-artistas',
  templateUrl: './home-artistas.component.html',
  styleUrls: ['./home-artistas.component.scss']
})
export class HomeArtistasComponent implements OnInit {
  constructor() {
  }
ngOnInit(): void {

}


    slides = [
      {img:"https://i.pinimg.com/236x/0f/6d/28/0f6d289fa737417b13cdacdf51e2ae7d.jpg"},
      {img:"https://i.pinimg.com/236x/b4/0a/95/b40a959371431507162af2a26db6d284.jpg"},
      {img:"https://i.pinimg.com/236x/5d/60/59/5d60598e6f3949eb731fb0a0fb1ee6e1.jpg"},
      {img:"https://i.pinimg.com/236x/e8/3a/76/e83a76d80d27c82e2379dc131807e575.jpg"},
      ];
    slides2 = [
      {img:"https://i.pinimg.com/736x/95/92/12/959212739f179dbb95773777d06ee542.jpg"},
      {img:"https://i.pinimg.com/236x/62/3f/f6/623ff60b1164895a4faae52ad50f96af.jpg"},
      {img:"https://i.pinimg.com/236x/07/b5/cc/07b5cc1af711f04dd81559bb35fe7f3a.jpg"},
      {img:"https://i.pinimg.com/236x/86/a2/fe/86a2febbff4df6fe2a819d274bd3c0a4.jpg"},
    ];

    slideConfig = {
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "autoplay": true,
      "autoplaySpeed": 4000,
      "pauseOnHover": true,
      "infinite": true,
      "responsive":[
        {
          "breakpoint": 992,
          "settings": {
            "arrows" :true,
            "infinite":true,
            "slidesToShow": 3,
            "slidesToScroll": 3,
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            "arrows" :true,
            "infinite":true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
          }
        },
        {
          "breakpoint": 575,
          "settings": {
            "autoplay": true,
            "autoplaySpeed": 6000,
            "pauseOnHover": true,
            "arrows" :false,
            "infinite":true,
            "slidesToShow": 2,
            "slidesToScroll":1,
          }
        },
      ]
    }

    }
