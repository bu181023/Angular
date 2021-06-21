import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  isCheck: boolean = true;
  student: any[] = [
    { id: 'BU181001', name: 'vignesh', dob: '01/02/2001' },
    { id: 'BU181002', name: 'vijay', dob: '08/10/2001' },
    { id: 'BU181003', name: 'vinitha', dob: '04/17/2001' },
    { id: 'BU181004', name: 'adhi', dob: '09/03/2001' },
    { id: 'BU181005', name: 'hithiesh', dob: '12/12/2001' },
  ];
  num: any[] = [1, 2, 3, 4, 5];

  nsFor: any[] = [
    {
      type: 'frontend',
      course: [{ name: 'html' }, { name: 'CSS' }, { name: 'javascript' }],
    },
    {
      type: 'backend',
      course: [{ name: 'php' }, { name: 'python' }, { name: 'java' }],
    },
  ];

  letter: any = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  constructor() {}

  ngOnInit(): void {}
}
