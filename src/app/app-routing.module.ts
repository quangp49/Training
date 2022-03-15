import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tree', component: TreeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
