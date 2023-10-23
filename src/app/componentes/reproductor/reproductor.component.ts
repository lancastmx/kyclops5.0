import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CancionService } from 'src/app/servicios/cancion.service';
import Swal from 'sweetalert2'

const fechaHoraActual = new Date();
const diaSemana = fechaHoraActual.getDay();
const horaActual = fechaHoraActual.getHours();


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss']
})
export class ReproductorComponent  implements OnInit {

ngOnInit(): void {
  const fechaHoraActual = new Date();
 const diaSemana = fechaHoraActual.getDay();
 const horaActual = fechaHoraActual.getHours();

}

  @ViewChild('playButton', { static: true }) playButton!: ElementRef;
  @ViewChild('coraButton', { static: true }) coraButton!: ElementRef;
  @ViewChild('linkAudio', { static: true }) LinkAudio!: ElementRef;
  audio: HTMLAudioElement;



  // Propiedades para el nombre del artista y la canción
  public nombreArtista: string = 'Kyclops- Radio Hd';
  public tituloServer: string = '-Conecta con';
  nombre: string = '';
  intro: HTMLAudioElement;
  isAnimate = true;

  constructor(
    private cancionService: CancionService,
    ){
    this.audio = new Audio("http://stream.zeno.fm/xfwqn4tk6eruv");
    this.intro = new Audio("/assets/Intro01.mp3");
    this.intro.volume = 0.2;
   }


  //  PARA NOMBRES
obtenerNombre(){
  this.cancionService.obtenerDatosEnTiempoReal().subscribe(
    (eventData: any) => {
      // Actualizar la información del reproductor con eventData
      this.tituloServer = eventData.streamTitle;
    },
    (error) => {
      console.error('Error en la conexión:', error);
    }
  );
}





compartir() {
  const paginaURL = window.location.href;
  const dummyElement = document.createElement('input');
  document.body.appendChild(dummyElement);
  dummyElement.value = paginaURL;
  dummyElement.select();
  document.execCommand('copy');
  document.body.removeChild(dummyElement);

  Swal.fire({
    title: 'Generando enlace seguro..',
    text: "¡Listo! ¿copiar enlace?",
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}


  //BOTON DE PLAY
  isPlaying = false;
  async play() {
    this.obtenerNombre();

    if (!this.intro.paused) {
      this.intro.pause();
      this.intro.currentTime = 0;
    }

    await this.playSound(this.intro);

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isAnimate = false;
    this.isPlaying = !this.isPlaying;
  }

  async playSound(audioElement: HTMLAudioElement) {
    return new Promise<void>((resolve, reject) => {
      audioElement.onended = () => {
        resolve();
      };

      audioElement.onerror = (error) => {
        reject(error);
      };

      audioElement.play();
    });
  }



  adjustarVolumen(event: any) {
    const volume = parseFloat(event.target.value) / 90;
    this.audio.volume = volume;
  }

  heartActive = false;
  cora() {
    this.heartActive = !this.heartActive;
    const coraIcon = this.coraButton.nativeElement.querySelector('.fa-heart');
    const cora2Icon = this.coraButton.nativeElement.querySelector('.fa-heart');

    if (this.heartActive) {
      coraIcon.classList.remove('fa-regular');
      coraIcon.classList.add('fa-solid');
    } else {
      cora2Icon.classList.remove('fa-solid');
      cora2Icon.classList.add('fa-regular');
    }
  }




}

