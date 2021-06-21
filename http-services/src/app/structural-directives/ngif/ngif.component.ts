import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  userName: boolean = false;
  passWord: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
