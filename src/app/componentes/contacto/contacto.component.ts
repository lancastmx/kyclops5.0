import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {

  }

  // LINKS FORMULARIOS
  fpub() {
    const form_publi = 'https://forms.gle/Z7t7tiPDTkShbfZQ8'
    const delayInSeconds = 1
    setTimeout(() => {
      window.open(form_publi, '_blank'); // Abre la URL en una nueva pestaña
    }, delayInSeconds * 1000); // Convierte los segundos en milisegundos
  }
  fban() {
    const form_bandas = 'https://forms.gle/TZb7ktwWUvQVZHBL8'

    const delayInSeconds = 1
    setTimeout(() => {
      window.open(form_bandas, '_blank'); // Abre la URL en una nueva pestaña
    }, delayInSeconds * 1000); // Convierte los segundos en milisegundos
  }



// IMAGENES CARDS
img2 = 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
img1 = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
}
