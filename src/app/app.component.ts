import { Component, OnInit } from '@angular/core';
import { loadMessages, locale } from 'devextreme/localization';
import esMessages from 'devextreme/localization/messages/es.json';
import config from 'devextreme/core/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    loadMessages(esMessages);
    locale('es-MX');
    config({ defaultCurrency: 'MXN', forceIsoDateParsing: true });
  }
  title = 'raiter-web';
}
