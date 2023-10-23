import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
  }
    slides = [
      { nombre: 'Marca 1', imagen: 'https://cdn-icons-png.flaticon.com/512/11124/11124075.png' },
      { nombre: 'Marca 2', imagen: 'https://cdn-icons-png.flaticon.com/512/2175/2175370.png' },
      { nombre: 'Marca 3', imagen: 'https://cdn-icons-png.flaticon.com/512/7306/7306093.png' },
      { nombre: 'Marca 1', imagen: 'https://cdn-icons-png.flaticon.com/512/109/109197.png' },
      { nombre: 'Marca 2', imagen: 'https://cdn-icons-png.flaticon.com/512/2504/2504929.png' },
      { nombre: 'Marca 3', imagen: 'https://cdn-icons-png.flaticon.com/512/871/871500.png' },
      // ... Agrega más marcas aquí ...
    ];

    slideConfig = {
      "slidesToShow": 4,
      "slidesToScroll": 4,
      "autoplay": true,
      "autoplaySpeed":1,
      "speed": 1500,
      "pauseOnHover": true,
      "infinite": true,
      "responsive":[
        {
          "breakpoint": 992,
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
            "slidesToScroll": 2,
            "swipeToSlide": true
          }
        },
        {
          "breakpoint": 575,
          "settings": {
            "arrows" :false,
            "infinite":true,
            "slidesToShow": 5,
            "slidesToScroll": 2,
            "swipeToSlide": true,
            "pauseOnHover": true

          }
        },
      ]
    }

}
