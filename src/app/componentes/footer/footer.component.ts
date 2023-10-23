import { Component, OnInit } from '@angular/core';
import { socialLinks } from 'src/app/config/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  spotifyLink = socialLinks.spotify;
  messengerLink = socialLinks.messenger;
  googleLink = socialLinks.google;
  instagramLink = socialLinks.instagram;
  linkedinLink = socialLinks.linkedin;

  ngOnInit(): void {
    this.AñoActual();
  }
  constructor(
  ){}

  copyright: string ='';
AñoActual(){
  const currentYear = new Date().getFullYear();
  this.copyright = `©${currentYear} KyclopsRadio All rights reserved`;
}

}
