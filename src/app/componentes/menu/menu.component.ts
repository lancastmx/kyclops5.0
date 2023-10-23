import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}


  ngOnInit() {
    this.checkWindowSize(); // Verifica el tamaño de la ventana al iniciar
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const menu = this.el.nativeElement.querySelector('.menu');
    if (menu.classList.contains('open')) {
      this.renderer.removeClass(menu, 'open');
    } else {
      this.renderer.addClass(menu, 'open');
    }
  }

  closeMenu() {
    const menu = this.el.nativeElement.querySelector('.menu');
    this.renderer.removeClass(menu, 'open');
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const menu = this.el.nativeElement.querySelector('.menu');
    const menuIcon = this.el.nativeElement.querySelector('.menu-icon');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      this.renderer.removeClass(menu, 'open');
    }
  }



  private checkWindowSize() {
    // Obtén el ancho actual de la ventana
    const windowWidth = window.innerWidth;

    // Define el ancho a partir del cual deseas activar el menú (por ejemplo, 992px)
    const breakpoint = 1992;

    // Activa o desactiva el menú según el tamaño de la ventana
    if (windowWidth >= breakpoint) {

      this.menuOpen = true;
      const menu = this.el.nativeElement.querySelector('.menu');
      this.renderer.addClass(menu, 'open');
    } else {
      this.menuOpen = false;
      const menu = this.el.nativeElement.querySelector('.menu');
      this.renderer.removeClass(menu, 'open');
    }
  }
}
