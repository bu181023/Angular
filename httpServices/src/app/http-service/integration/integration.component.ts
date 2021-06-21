import { Component, OnInit } from '@angular/core';
import { EmpNameService } from '../emp-name.service';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css'],
})
export class IntegrationComponent implements OnInit {
  constructor(private empName: EmpNameService) {}

  emp: any;

  ngOnInit(): void {
    this.empName.getName().subscribe((data) => {
      this.emp = data;
    });
  }
}


























