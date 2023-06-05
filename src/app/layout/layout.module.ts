import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';

const COMPONENTS = [HeaderComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, LayoutComponent],
  exports: [...COMPONENTS, LayoutComponent]
})
export class LayoutModule {}
