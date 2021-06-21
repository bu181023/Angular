import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css'],
})
export class CustomPipeComponent implements OnInit {
 title:string='Custom pip'
  empolyee: any[] = [
    {
      id: 101,
      name: 'john',
      city: 'delhi',
      salary: 20000,
      dob: new Date('05/10/2001'),
    },
    {
      id: 102,
      name: 'peter',
      city: 'pune',
      salary: 120000,
      dob: new Date('12/11/1992'),
    },
    {
      id: 103,
      name: 'vicky',
      city: 'goa',
      salary: 180000,
      dob: new Date('02/02/1889'),
    },
    {
      id: 104,
      name: 'vijay',
      city: 'tamilnadu',
      salary: 10000,
      dob: new Date('11/04/2001'),
    },
    {
      id: 105,
      name: 'adhi',
      city: 'delhi',
      salary: 60000,
      dob: new Date('05/07/1999'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
