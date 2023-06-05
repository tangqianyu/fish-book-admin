import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NB_MODULES } from './shared-nb';
import { MatRippleModule } from '@angular/material/core';
import { FormlyFieldsModule } from './modules/formly-fields/formly-fields.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';

const THIRDMODULES: Array<Type<any>> = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Array<Type<any>> = [DynamicFormComponent];
const DIRECTIVES: Array<Type<any>> = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatRippleModule,
    FormlyFieldsModule,
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
    FormlyFieldsModule,
    ...NB_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
