import { Component } from '@angular/core';
import { socialLinks } from 'src/app/config/config';


@Component({
  selector: 'app-what-button',
  templateUrl: './what-button.component.html',
  styleUrls: ['./what-button.component.scss']
})
export class WhatButtonComponent {

  messengerLink = socialLinks.messenger;


  handleButtonClick() {
    // Aquí puedes definir lo que deseas que ocurra al hacer clic en el botón
    console.log('Botón "What" clicado');
  }

}
