import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formFields!: FormlyFieldConfig[];
  @Input() layout: 'inline' | 'block' = 'block';
  @Input() model = {};
  @Input() submitText: string | null = 'Submit';
  @Input() submitStatus: string = 'primary';
  @Input() submitLoading: boolean = false;
  @Input() resetText: string | null = 'Reset';
  @Input() resetStatus: string = '';
  @Input() resetLoading: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  dynamicForm = new FormGroup({});

  constructor() {}

  ngOnInit() {}

  submit() {
    this.onSubmit.emit(this.model);
  }

  reset() {
    this.model = {};
    this.dynamicForm.reset();
  }
}
