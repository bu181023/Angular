import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  constructor() {}
  selectContry: any = null;
  // varEvent = ;
  country: any[] = [
    { code: 'ind', name: 'India' },
    { code: 'uae', name: 'United Arab Emirates' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'us', name: 'United State' },
  ];

  chose(code: any) {
    this.selectContry = code.value;
  }
  // ----------------------------------------

  stateCode: any;

  states(st: any) {
    this.stateCode = st.value;
    // console.log(this.stateCode);
  }
  stateName: any[] = [
    {
      code: 'tn',
      countryName: 'TamilNadu',
      districtName: [
        { disName: 'Tirupattur' },
        { disName: 'Vellore' },
        { disName: 'Erode' },
        { disName: 'Karur' },
      ],
    },
    {
      code: 'dl',
      countryName: 'Delhi',
      districtName: [
        { distName: 'New Delhi' },
        { distName: 'Central Delhi' },
        { distName: 'East Delhi' },
        { distName: 'North Delhi' },
      ],
    },
    {
      code: 'ga',
      countryName: 'Goa',
    },
    {
      code: 'gj',
      countryName: 'Gujarat',
    },
    {
      code: 'hr',
      countryName: 'Haryana',
    },
    {
      code: 'jk',
      countryName: 'Jammu and Kashmir',
    },
    {
      code: 'kl',
      countryName: 'Kerala',
    },
    {
      code: 'or',
      countryName: 'Odisha',
    },
    {
      code: 'tg',
      countryName: 'Telangana',
    },
    {
      code: 'pb',
      countryName: 'Punjab',
    },
  ];

  // district = [
  //   {
  //     tn: [
  //       { distName: 'Tirupattur' },
  //       { distName: 'Vellore' },
  //       { distName: 'Erode' },
  //       { distName: 'Karur' },
  //     ],
  //   },
  //   {
  //     dl: [
  //       { distName: 'New Delhi' },
  //       { distName: 'Central Delhi' },
  //       { distName: 'East Delhi' },
  //       { distName: 'North Delhi' },
  //     ],
  //   },
  //   {
  //     ga: [
  //       { distName: 'North Goa' },
  //       { distName: 'South Goa' },
  //       { distName: 'Panaji' },
  //       { distName: 'Mapusa' },
  //     ],
  //   },
  //   {
  //     gj: [
  //       { distName: 'Ahmedabad' },
  //       { distName: 'Amreli' },
  //       { distName: 'Anand' },
  //     ],
  //   },
  //   {
  //     hr: [
  //       { distName: 'Tirupattur' },
  //       { distName: 'Vellore' },
  //       { distName: 'Erode' },
  //       { distName: 'Karur' },
  //     ],
  //   },
  //   {
  //     jk: [
  //       { distName: 'Tirupattur' },
  //       { distName: 'Vellore' },
  //       { distName: 'Erode' },
  //       { distName: 'Karur' },
  //     ],
  //   },
  // ];

  ngOnInit(): void {}
}
