import { Component, OnInit } from '@angular/core';
import { MarketingService } from '../../marketing.service';

@Component({
  selector: 'app-marketing-filter',
  templateUrl: './marketing-filter.component.html',
  styleUrls: ['./marketing-filter.component.css'],
})
export class MarketingFilterComponent implements OnInit {
  startDate: string | undefined;
  endDate: string | undefined;
  minRecharge: number | undefined;
  maxRecharge: number | undefined;
  marketingType: string | undefined;

  constructor(private marketingService: MarketingService) {}

  ngOnInit(): void {}

  applyFilters(): void {
    const filters = {
      startDate: this.startDate,
      endDate: this.endDate,
      minRecharge: this.minRecharge,
      maxRecharge: this.maxRecharge,
      marketingType: this.marketingType,
    };

    this.marketingService.exportMarketingData(filters).subscribe(
      (response) => {
        // Handle success if needed
      },
      (error) => {
        // Handle error if needed
      }
    );
  }
}
