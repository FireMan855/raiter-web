import { Component, Input, TemplateRef } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-campo',
  templateUrl: './tooltip-campo.component.html',
  styleUrl: './tooltip-campo.component.css',
})
export class TooltipCampoComponent {

  @Input() ngbPopover?: string | TemplateRef<any> | null
  

}
