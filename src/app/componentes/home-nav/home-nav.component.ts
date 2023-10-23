import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit, AfterViewInit {
  navItemsVisible = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initNavMenu();
  }

  initNavMenu(): void {
    const mainnav = document.getElementById('mainnav');
    const listItems = mainnav?.querySelectorAll('li:not(:last-child)');

    if (listItems) {
      listItems.forEach((li, index) => {
        li.classList.add('invisible');
        li.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    }
  }

  toggleNavItems(): void {
    this.navItemsVisible = !this.navItemsVisible;
    const listItems = document.querySelectorAll('#mainnav li:not(:last-child)');
    listItems.forEach((item, i) => {
      setTimeout(() => {
        item.classList.toggle('invisible', !this.navItemsVisible);
        item.classList.toggle('animate', this.navItemsVisible);
      }, 200 * i);
    });
  }
}
