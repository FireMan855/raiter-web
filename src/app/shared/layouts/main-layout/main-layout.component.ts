import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { usuarioRaiterSelector } from '../../store/usuario-raiter/usuario-raiter.selectors';
import { RaiterState } from '../../store/load-panel/RaiterState.interface';
import { takeUntil } from 'rxjs';
import { UsuarioRaiterState } from '../../store/usuario-raiter/UsuarioRaiterState.interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  usuarioRaiter? : UsuarioRaiterState;
  private readonly sidebarClass = 'sidebar-icon-only';
  @ViewChild(MainMenuComponent) private readonly mainMenu!: MainMenuComponent
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly renderer: Renderer2,
  private readonly store : Store<RaiterState>) { }

  ngOnInit(): void {
    this.store.select(usuarioRaiterSelector).subscribe(user => {
      this.usuarioRaiter = user;
    })  
  }

  abrirCerrarMenuIzquierdo() {
    if (this.document.body.classList.contains(this.sidebarClass)) {
      this.renderer.removeClass(this.document.body, this.sidebarClass);
    }
    else {
      this.renderer.addClass(this.document.body, this.sidebarClass);
    }
  }
  abrirCerrarMenuDerecho() {
    this.mainMenu.menuDerechoAbierto = !this.mainMenu.menuDerechoAbierto;
  }
}
