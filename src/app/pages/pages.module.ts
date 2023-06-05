import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { BookManagementComponent } from './book-management/book-management.component';

@NgModule({
  imports: [PagesRoutingModule, CommonModule, SharedModule, LayoutModule],
  declarations: [PagesComponent, BookManagementComponent]
})
export class PagesModule {}
