import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  model = { email: 'email@gmail.com' };

  constructor() {}

  ngOnInit() {}

  // fields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'flex gap-3',
  //     className: 'flex',
  //     fieldGroup: [
  //       {
  //         key: 'email',
  //         type: 'input',
  //         props: {
  //           label: 'Email address',
  //           placeholder: 'Enter email',
  //           required: true
  //         }
  //       },
  //       {
  //         key: 'country',
  //         type: 'select',
  //         props: {
  //           label: 'Country',
  //           placeholder: 'Enter country',
  //           options: [
  //             { label: 'China', value: 'zh' },
  //             { label: 'USA', value: 'us' }
  //           ],
  //           required: true
  //         }
  //       }
  //     ]
  //   }
  // ];

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      },
    },
    {
      key: 'country',
      type: 'select',
      props: {
        label: 'Country',
        placeholder: 'Enter country',
        options: [
          { label: 'China', value: 'zh' },
          { label: 'USA', value: 'us' }
        ],
        required: true
      },
    },
  ];

  onSubmit(value: any) {
    console.log(value);
  }
}
