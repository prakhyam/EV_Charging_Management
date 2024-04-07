import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../addstations/table-list.component';
import { IconsComponent } from '../../transactions/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { AddStationComponent } from '../../add-station/add-station.component';
import { TypographyComponent } from '../../typography/typography.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'icons',          component: IconsComponent},
    { path: 'add-stations',    component: AddStationComponent},
    { path: 'typography',      component: TypographyComponent}
    
];
