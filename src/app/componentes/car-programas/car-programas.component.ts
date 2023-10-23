import { Component } from '@angular/core';

@Component({
  selector: 'app-car-programas',
  templateUrl: './car-programas.component.html',
  styleUrls: ['./car-programas.component.scss']
})
export class CarProgramasComponent {

slides = [
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
  {img:"https://kyclops.com/images/programas/LC-img.png"},
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
        "arrows" :false,
        "infinite":true,
        "slidesToShow": 2,
        "slidesToScroll":1,
      }
    },
  ]
}

}
