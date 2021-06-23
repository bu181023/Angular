import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  panelOpenState: boolean = false;
  data: any[] = [
    {
      name: 'vignesh',
      info: [
        {
          version: '1.0.0',
          title: 'Swagger Petstore',
          description:
            'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
          termsOfService: 'http://swagger.io/terms/',
          contact: [
            {
              name: 'Swagger API Team',
              email: 'apiteam@swagger.io',
              url: 'http://swagger.io',
            },
          ],
        },
      ],
      license: [
        {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
