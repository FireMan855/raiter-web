import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromNow',
  standalone: true
})
export class DateFromNowPipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
    const units = [
      { singular: 'año', plural: 'años', seconds: 31536000 },
      { singular: 'mes', plural: 'meses', seconds: 2592000 },
      { singular: 'semana', plural: 'semanas', seconds: 604800 },
      { singular: 'día', plural: 'días', seconds: 86400 },
      { singular: 'hora', plural: 'horas', seconds: 3600 },
      { singular: 'minuto', plural: 'minutos', seconds: 60 },
      { singular: 'segundo', plural: 'segundos', seconds: 1 },
    ];
  
    for (const unit of units) {
      const interval = Math.floor(diffInSeconds / unit.seconds);
      if (interval >= 1) {
        return interval === 1 ? `hace ${interval} ${unit.singular}` : `hace ${interval} ${unit.plural}`;
      }
    }
  
    return 'ahora mismo';
  }

}
