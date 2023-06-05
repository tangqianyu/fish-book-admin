import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  templateUrl: './formly-field-input.component.html',
  styleUrls: ['./formly-field-input.component.scss']
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> implements OnInit {
  ngOnInit() {}
}
