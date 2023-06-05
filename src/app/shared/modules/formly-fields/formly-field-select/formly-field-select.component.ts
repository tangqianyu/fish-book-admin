import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-select',
  templateUrl: './formly-field-select.component.html',
  styleUrls: ['./formly-field-select.component.scss']
})
export class FormlyFieldSelectComponent extends FieldType<FieldTypeConfig> implements OnInit {
  ngOnInit() {}
}
