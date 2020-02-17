import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],


})
export class AppComponent {
  miVariable = 'Hola';
  // title = 'Trabajo';

  obtenerValor(elemento: HTMLInputElement): void {
    if (elemento.value === '') {
      alert('No se puede introducir valor vacío');
    } else {
      console.log(elemento.value);
      this.miVariable = elemento.value;
    }
  }
}
