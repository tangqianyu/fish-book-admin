import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-wrapper',
  templateUrl: './formly-field-wrapper.component.html',
  styleUrls: ['./formly-field-wrapper.component.scss']
})
export class FormlyFieldWrapperComponent extends FieldWrapper {}
