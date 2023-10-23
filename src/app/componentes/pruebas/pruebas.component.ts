import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

destroy$ = new Subject<void>();
showMenu = true;
canvas! :  HTMLCanvasElement;
ctx!: CanvasRenderingContext2D;
gridSize = 17; // Tamaño de cada celda en píxeles
snakeSpeed = 100; // Velocidad de movimiento de la serpiente en milisegundos
boardWidth!: number ;
boardHeight!: number;
snake: { x: number; y: number }[] = [{ x: 10, y: 10 }];
direction = "right";
food = { x: 15, y: 15 };
isGameRunning = false;
score = 0;

@ViewChild('gameCanvas', { static: true }) gameCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(){
    window.addEventListener('keydown', (event) => this.onKeyDown(event));

  }
  //ESTO SE EJECUTA AL INICIAR LA APP
  ngOnInit() {
    this.canvas = this.gameCanvas.nativeElement;
    const context = this.canvas.getContext("2d");

    if (context) {
      this.ctx = context;
      this.canvas.width = 400; // Ancho en píxeles
      this.canvas.height = 300; // Alto en píxeles
      this.boardWidth = this.canvas.width / this.gridSize;
      this.boardHeight = this.canvas.height / this.gridSize;
    } else {
      // Manejar el caso en el que getContext("2d") devuelve null, por ejemplo, mostrando un mensaje de error o tomando alguna otra acción apropiada.
    }
    this.gameLoop();
    this.canvas.width = this.boardWidth * this.gridSize;
    this.canvas.height = this.boardHeight * this.gridSize;

  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
}


gameLoop() {
    interval(this.snakeSpeed)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
            if (this.isGameRunning) {
                this.moveSnake();
                this.drawGame();
            }
        });

}
startGame() {
  this.score = 0
  this.destroy$.next(); // Detener el intervalo anterior
  this.destroy$.complete();
  this.destroy$ = new Subject<void>(); // Crear un nuevo Subject

  this.drawGame();
  this.snake = [{ x: 10, y: 10 }];
  this.direction = "right";
  this.food = { x: 5, y: 5 };
  this.isGameRunning = true;
  this.gameLoop();
  this.showMenu = true;
}

restartGame() {
  // para reiniciar el juego
}
// Función para dibujar el juego
rotationAngle = 0;
headSize = 30;
drawGame() {
  // Dibuja el tablero
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  // Dibuja la serpiente
  this.snake.forEach((segment, index) => {
    if (index === 0) {
      this.ctx.save(); // Guarda el estado actual del contexto

      // Calcula el ángulo de rotación en radianes según la dirección actual
      let rotationInRadians = 0; // Sin rotación (por defecto)

      if (this.direction === "up") {
        rotationInRadians = -Math.PI / 2; // 270 grados (arriba)
      } else if (this.direction === "down") {
        rotationInRadians = Math.PI / 2; // 90 grados (abajo)
      } else if (this.direction === "left") {
        rotationInRadians = Math.PI; // 180 grados (izquierda)
      } else if (this.direction === "right") {
        rotationInRadians = 0; // 0 grados (derecha)
      }


      // Calcula las coordenadas del centro de la cabeza
      const headCenterX = segment.x * this.gridSize + this.gridSize / 4;
      const headCenterY = segment.y * this.gridSize + this.gridSize / 2;

      // Aplica la rotación al contexto del canvas
      this.ctx.translate(headCenterX, headCenterY);
      this.ctx.rotate(rotationInRadians);

      // Dibuja la cabeza como un triángulo con el punto más alto hacia la derecha
      this.ctx.fillStyle = "#FFD700"; // Color de la cabeza
      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.gridSize / 2); // Punto superior (rotado)
      this.ctx.lineTo(this.gridSize / 1, this.gridSize / 2); // Punto inferior derecho (rotado)
      this.ctx.lineTo(-this.gridSize / 2, this.gridSize / 2); // Punto inferior izquierdo (rotado)
      this.ctx.closePath();
      this.ctx.fill();

      // Restablece la transformación para evitar que afecte a otros elementos
      this.ctx.restore(); // Restaura el estado anterior del contexto
    } else {
      // Dibuja el cuerpo como rectángulo
      this.ctx.fillStyle = "#33ff33";
      this.ctx.fillRect(
        segment.x * this.gridSize,
        segment.y * this.gridSize,
        this.gridSize,
        this.gridSize
      );
    }
  });

  // Dibuja la comida
  this.ctx.fillStyle = "#ff3333";
  this.ctx.beginPath();
  this.ctx.arc(
    this.food.x * this.gridSize + this.gridSize / 2,
    this.food.y * this.gridSize + this.gridSize / 2,
    this.gridSize / 2,
    0,
    Math.PI * 2
  );
  this.ctx.fill();
}






// Función para mover la serpiente
moveSnake() {
  let head = { ...this.snake[0] };

  switch (this.direction) {
      case "up":
          head.y--;
          break;
      case "down":
          head.y++;
          break;
      case "left":
          head.x--;
          break;
      case "right":
          head.x++;
          break;
  }

  // Comprueba si la serpiente ha alcanzado los bordes del tablero y ajusta su posición
  if (head.x < 0) {
      head.x = this.boardWidth - 1;
  } else if (head.x >= this.boardWidth) {
      head.x = 0;
  }
  if (head.y < 0) {
      head.y = this.boardHeight - 1;
  } else if (head.y >= this.boardHeight) {
      head.y = 0;
  }

  this.snake.unshift(head);

  // Comprobar si la serpiente ha comido la comida
  if (head.x === this.food.x && head.y === this.food.y) {
    this.score ++;
      // Generar nueva comida en una ubicación aleatoria
      this.food.x = Math.floor(Math.random() * this.boardWidth);
      this.food.y = Math.floor(Math.random() * this.boardHeight);

      // Aumentar la velocidad al comer la comida
      //this.snakeSpeed /= 1.1;
  } else {
      // Si no ha comido, eliminar el último segmento de la serpiente
      this.snake.pop();
  }

  // Comprobar colisiones con la propia serpiente
  for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
          this.startGame();
          break;
      }
  }
}

@HostListener('window:keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {

  switch (event.key) {
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowLeft":
    case "ArrowRight":
      event.preventDefault(); // Evita el comportamiento predeterminado del navegador para estas teclas
      break;
  }
    switch (event.key) {
        case "ArrowUp":
            if (this.direction !== "down") this.direction = "up";
            break;
        case "ArrowDown":
            if (this.direction !== "up") this.direction = "down";
            break;
        case "ArrowLeft":
            if (this.direction !== "right") this.direction = "left";
            break;
        case "ArrowRight":
            if (this.direction !== "left") this.direction = "right";
            break;
    }
}

}
