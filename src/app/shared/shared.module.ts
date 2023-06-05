import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NB_MODULES } from './shared-nb';
import { MatRippleModule } from '@angular/material/core';
import { DynamicFormModule } from './modules/dynamic-form';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';

const THIRDMODULES: Array<Type<any>> = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Array<Type<any>> = [];
const DIRECTIVES: Array<Type<any>> = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatRippleModule,
    DynamicFormModule,
    ...NB_MODULES,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatRippleModule,
    DynamicFormModule,
    ...NB_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
