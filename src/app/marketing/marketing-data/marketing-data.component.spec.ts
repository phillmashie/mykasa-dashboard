import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDataComponent } from './marketing-data.component';

describe('MarketingDataComponent', () => {
  let component: MarketingDataComponent;
  let fixture: ComponentFixture<MarketingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingDataComponent]
    });
    fixture = TestBed.createComponent(MarketingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
