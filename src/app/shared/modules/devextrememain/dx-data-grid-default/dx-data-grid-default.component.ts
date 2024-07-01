import { Component, Input } from '@angular/core';
import DataSource from 'devextreme/data/data_source'
import DataSourceOptions from 'devextreme/data/data_source'
import Store from 'devextreme/data/data_source'


@Component({
  selector: 'app-dx-data-grid-default',
  templateUrl: './dx-data-grid-default.component.html',
  styleUrl: './dx-data-grid-default.component.css'
})
export class DxDataGridDefaultComponent {
  @Input () dataSource!:  DataSource | DataSourceOptions | Store | null | string | Array<any>;
}
