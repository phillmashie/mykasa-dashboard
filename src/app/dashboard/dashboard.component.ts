import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'chart.js/auto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;

  // Weekly Market Comparison
  public weeklyMarketComparisonData: ChartDataset[] = [];
  public weeklyMarketComparisonLabels: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public weeklyMarketComparisonType: ChartType = 'bar';
  public weeklyMarketComparisonLegend = true;
  public weeklyMarketComparisonOptions: ChartOptions = {
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  // Monthly Market Comparison
  public monthlyMarketComparisonData: ChartDataset[] = [];
  public monthlyMarketComparisonLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public monthlyMarketComparisonType: ChartType = 'bar';
  public monthlyMarketComparisonLegend = true;
  public monthlyMarketComparisonOptions: ChartOptions = {
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  // Weekly User Activity
  // Weekly User Activity
  public weeklyUserActivityData: ChartDataset[] = [];
  public weeklyUserActivityLabels: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public weeklyUserActivityType: ChartType = 'bar';
  public weeklyUserActivityLegend = true;
  public weeklyUserActivityOptions: ChartOptions = {
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  // Monthly User Activity
  public monthlyUserActivityData: ChartDataset[] = [];
  public monthlyUserActivityLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public monthlyUserActivityType: ChartType = 'bar';
  public monthlyUserActivityLegend = true;
  public monthlyUserActivityOptions: ChartOptions = {
    responsive: true,
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch user details from the UserService
    this.userService.getUser().subscribe(
      (userData: any) => {
        // Assign the user details to the user object
        this.user = {
          fullname: userData.fullname,
          username: userData.username,
          avatar: userData.avatar,
        };
      },
      (error: any) => {
        console.log('Error fetching user details:', error);
      }
    );

    // Fetch Weekly Market Comparison data from the backend
    this.userService.getWeeklyMarketComparison().subscribe(
      (data: any) => {
        this.weeklyMarketComparisonData = data;
        // Extract labels from the data (e.g., Sunday, Monday, etc.)
        this.weeklyMarketComparisonLabels = Object.keys(data);
      },
      (error: any) => {
        console.log('Error fetching weekly market comparison data:', error);
      }
    );

    // Fetch Monthly Market Comparison data from the backend
    this.userService.getMonthlyMarketComparison().subscribe(
      (data: any) => {
        this.monthlyMarketComparisonData = data;
        // Extract labels from the data (e.g., January, February, etc.)
        this.monthlyMarketComparisonLabels = Object.keys(data);
      },
      (error: any) => {
        console.log('Error fetching monthly market comparison data:', error);
      }
    );

    // Fetch Weekly User Activity data from the backend
    // Fetch Weekly User Activity data from the backend
    this.userService.getWeeklyUserActivity().subscribe(
      (data: any) => {
        this.weeklyUserActivityData = data;
      },
      (error: any) => {
        console.log('Error fetching weekly user activity data:', error);
      }
    );

    // Fetch Monthly User Activity data from the backend
    this.userService.getMonthlyUserActivity().subscribe(
      (data: any) => {
        this.monthlyUserActivityData = data;
        // Extract labels from the data (e.g., January, February, etc.)
        this.monthlyUserActivityLabels = Object.keys(data);
      },
      (error: any) => {
        console.log('Error fetching monthly user activity data:', error);
      }
    );
  }
}
