import { Component } from '@angular/core';

@Component({
  selector: 'app-home-eventos',
  templateUrl: './home-eventos.component.html',
  styleUrls: ['./home-eventos.component.scss']
})
export class HomeEventosComponent {

  slides = [
    {img:"https://i.pinimg.com/236x/e9/4e/5a/e94e5abfb833d71782db0c9932fe2d46.jpg"},
    {img:"https://i.pinimg.com/236x/e9/27/7c/e9277ca310ccb81b01f971f74694c881.jpg"},
    {img:"https://i.pinimg.com/236x/10/2d/d7/102dd725dcc0da6a162c0173c5458467.jpg"},
    {img:"https://i.pinimg.com/236x/e8/3a/76/e83a76d80d27c82e2379dc131807e575.jpg"},
    {img:"https://i.pinimg.com/236x/10/e7/c4/10e7c4bc0d5ff2d58aa1bcc228b63640.jpg"},
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
            "autoplaySpeed": 9000,
            "pauseOnHover": true,
            "arrows" :false,
            "infinite":true,
            "slidesToShow": 2,
            "slidesToScroll":2,
          }
        },
      ]
    }
}
