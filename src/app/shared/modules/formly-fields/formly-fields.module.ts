import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbUserModule
} from '@nebular/theme';
import { FormlyFieldInputComponent } from './formly-field-input/formly-field-input.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldWrapperComponent } from './formly-field-wrapper/formly-field-wrapper.component';
import { FormlyFieldSelectComponent } from './formly-field-select/formly-field-select.component';
import { FormlySelectModule } from '@ngx-formly/core/select';

@NgModule({
  declarations: [FormlyFieldWrapperComponent, FormlyFieldInputComponent, FormlyFieldSelectComponent],
  exports: [FormlyModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbSpinnerModule,
    FormlyBootstrapModule,
    FormlySelectModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'formly-field-wrapper', component: FormlyFieldWrapperComponent }],
      types: [
        { name: 'input', component: FormlyFieldInputComponent, wrappers: ['formly-field-wrapper'] },
        { name: 'select', component: FormlyFieldSelectComponent, wrappers: ['formly-field-wrapper'] }
      ]
    })
  ]
})
export class FormlyFieldsModule {}
