import { Component, Input, OnInit } from '@angular/core';
import { MarketingService } from '../../marketing.service';

@Component({
  selector: 'app-marketing-data',
  templateUrl: './marketing-data.component.html',
  styleUrls: ['./marketing-data.component.css'],
})
export class MarketingDataComponent implements OnInit {
  @Input() filteredMarketingData: any[] = []; // Add @Input() decorator

  displayedColumns: string[] = [
    'msisdn',
    'rechargedate',
    'recharges',
    'marketingType',
  ];

  constructor(private marketingService: MarketingService) {}

  ngOnInit(): void {}

  applyFilters(filters: any): void {
    this.marketingService.exportMarketingData(filters).subscribe(
      (data) => {
        this.filteredMarketingData = data;
      },
      (error) => {
        // Handle error if needed
      }
    );
  }
}
