import { Component } from '@angular/core';
import { socialLinks } from 'src/app/config/config';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
  discord = socialLinks.discord

  rotating: boolean = false;

  rotateIcon() {
    this.rotating = true;
    setTimeout(() => {
      this.rotating = false;
    }, 2000);
  }

}
