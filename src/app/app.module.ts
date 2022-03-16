import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { CustomPaginator } from './Services/CustomPaginator';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [AppComponent, TableComponent, MenuComponent, TreeComponent,],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
  bootstrap: [AppComponent],
})
export class AppModule { } 
