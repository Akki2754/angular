import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full' },
  { path: 'employee-list', loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)},
  { path: 'employee-filter', loadChildren: './employee-filter/employee-filter.module#EmployeeFilterPageModule' },
  { path: 'employees',
        children: [
          
          { path: 'detail/:id', loadChildren: './employee-detail/employee-detail.module#EmployeeDetailPageModule' }
        ]
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
  },
  {
    path: 'employee-filter',
    loadChildren: () => import('./employee-filter/employee-filter.module').then( m => m.EmployeeFilterPageModule)
  },
  {
    path: 'employee-detail',
    loadChildren: () => import('./employee-detail/employee-detail.module').then( m => m.EmployeeDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }