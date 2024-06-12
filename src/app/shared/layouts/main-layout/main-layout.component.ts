import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  private readonly sidebarClass = 'sidebar-icon-only';
  @ViewChild(MainMenuComponent) private readonly mainMenu! : MainMenuComponent
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly renderer: Renderer2) { }

  abrirCerrarMenuIzquierdo() {
    if (this.document.body.classList.contains(this.sidebarClass)) {
      this.renderer.removeClass(this.document.body, this.sidebarClass);
    }
    else {
      this.renderer.addClass(this.document.body, this.sidebarClass);
    }
  }
  abrirCerrarMenuDerecho(){
    this.mainMenu.menuDerechoAbierto = !this.mainMenu.menuDerechoAbierto;
  }
}
