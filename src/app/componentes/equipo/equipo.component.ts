import { Component, OnInit } from '@angular/core';
import { Perfiles } from 'src/app/models/perfil.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AutorService } from 'src/app/servicios/autor.service';
import { HttpClient } from '@angular/common/http';
import { Autor } from 'src/app/models/autor.model';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{

  perfiles: Perfiles[] = [];

  equipo = [
    { nombre: 'Alin', perfil: 'Locutora', img: './assets/team/alin.png' },
    { nombre: 'Andy',perfil: 'Locutora', img: './assets/team/andy.png' },
    { nombre: 'Angel',perfil: 'Productor/Analista', img: './assets/team/angel.png' },
    { nombre: 'Gerardo',perfil: 'Diseño', img: './assets/team/chino.png' },
    { nombre: 'Cristina',perfil: 'Codificadora', img: './assets/team/cristina.png' },
    { nombre: 'Damian',perfil: 'Anfitrión', img: './assets/team/dan.png' },
    { nombre: 'Diego',perfil: 'Anfitrión', img: './assets/team/diego.png' },
    { nombre: 'Erasmo',perfil: 'Anfitrión', img: './assets/team/era.png' },
    { nombre: 'Super Grillo',perfil: 'Anfitrión', img: './assets/team/grillo.png' },
    { nombre: 'Jorge',perfil: 'anfitrión/', img: './assets/team/jorge.png' },
    { nombre: 'Julio',perfil: 'codificador', img: './assets/team/julio.png' },
    { nombre: 'Luigui',perfil: 'Anfitrión', img: './assets/team/luigi.png' },
    { nombre: 'Miguel',perfil: 'Anfitrión/Productor', img: './assets/team/mike.png' },
    { nombre: 'Rubén',perfil: 'Jefe Maistro', img: './assets/team/ruben.png' },
    { nombre: 'Paola',perfil: 'Sr. Justicia', img: './assets/team/pato.png' },
  ];
  constructor(
    private autorService: AutorService,
    private http : HttpClient,

    ){}




    slideConfig = {
     "slidesToShow": 4,
     "slidesToScroll": 2,
     "autoplay": true,
     "autoplaySpeed": 4000,
     "pauseOnHover": true,
     "arrows" :false,
     "infinite": true,
     "responsive":[
       {
         "breakpoint": 1240,
         "settings": {
           "arrows" :false,
           "infinite":true,
           "slidesToShow": 3,
           "slidesToScroll": 1,
         }
       },
       {
         "breakpoint": 900,
         "settings": {
           "arrows" :false,
           "infinite":true,
           "slidesToShow": 2,
           "slidesToScroll": 1,
         }
       },
       {
         "breakpoint": 575,
         "settings": {
     "autoplaySpeed": 4000,
           "arrows" :false,
           "infinite":true,
           "slidesToShow": 1,
           "slidesToScroll": 1,
           "swipeToSlide": true,
           "fade": true
         }
       },
     ]
   }




  ngOnInit(
  ){



   // Recorre el arreglo del equipo y crea un perfil para cada miembro
  for (const miembro of this.equipo) {
    const perfil = new Perfiles(
      this.perfiles.length + 1,
      miembro.nombre,
      miembro.perfil,
      'redes',
      'play',
      'contacto',
      miembro.img
    );

    // Agrega el perfil al arreglo de perfiles
    this.perfiles.push(perfil);
  }
   }



//TESTEANDO API
//RECUERDA EL PROXY
autor : Autor = new Autor(0,'','','','','','','','');

 obtenerAutores(){
  const json = 12; //  el ID
    this.autorService.autor(json).subscribe(
      (resp:any) => {
        if(resp.data){
          this.autor = resp.data;
          console.log('resp :>> ', resp.data);

        }

      },
      (error) => {
        console.error('Error al obtener el autor:', error);
      }
      );
      console.log('Respuesta del servidor completa:', this.autor);
 }







}
