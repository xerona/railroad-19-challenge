import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { RecordsTableComponent } from './records-table/records-table.component';
import { DetailedRecordComponent } from './detailed-record/detailed-record.component';

const routes: Routes = [
    {
      path: '',
      component: RecordsTableComponent
    },
    {
      path: 'record/:title',
      component: DetailedRecordComponent
    }
];

export const appRoutes = RouterModule.forRoot(routes);
