import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css'],
})
export class GraphsComponent implements OnInit {
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(173,216,230,0.2)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(144,238,144,0.2)',
    },
  ];
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
    },
  };

  barChartData: ChartDataSets[] = [];
  barChartLabels: Label[] = [];
  barChartLegend = true;
  barChartType: ChartType = 'bar';
  barChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(173,216,230,0.2)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(144,238,144,0.2)',
    },
  ];
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
    },
  };

  constructor(private graphDataService: GraphDataService) {}

  ngOnInit(): void {
    // Fetch data from your service and update the lineChartData and barChartData arrays
    this.graphDataService.getGraphData().subscribe(
      (data) => {
        this.lineChartData = [
          {
            data: data.monthlyMarketingData.map((item: { count: any; }) => item.count),
            label: 'SMS Marketing',
          },
          {
            data: data.monthlyRegisteredData.map((item: { count: any; }) => item.count),
            label: 'Registrations',
          },
        ];
        this.lineChartLabels = data.monthlyMarketingData.map(
          (item: { period: any; }) => item.period
        );

        this.barChartData = [
          {
            data: data.monthlyMarketingData.map((item: { count: any; }) => item.count),
            label: 'SMS Marketing',
          },
          {
            data: data.monthlyRegisteredData.map((item: { count: any; }) => item.count),
            label: 'Registrations',
          },
        ];
        this.barChartLabels = data.monthlyMarketingData.map(
          (item: { period: any; }) => item.period
        );
      },
      (error) => {
        console.error('Error fetching graph data:', error);
      }
    );
  }
}
