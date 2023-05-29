import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  chartData: any[] = [];
  tableData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Simulated data
    this.chartData = [
      { label: 'Category 1', value: 10 },
      { label: 'Category 2', value: 20 },
      { label: 'Category 3', value: 15 },
    ];

    this.tableData = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 20 },
      { id: 3, name: 'Item 3', price: 15 },
    ];
  }
}
