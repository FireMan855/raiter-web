import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-no-encontrada',
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrl: './pagina-no-encontrada.component.css'
})
export class PaginaNoEncontradaComponent {
  readonly anioCopyright = new Date().getFullYear();
}
