import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFilterComponent } from './marketing-filter.component';

describe('MarketingFilterComponent', () => {
  let component: MarketingFilterComponent;
  let fixture: ComponentFixture<MarketingFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingFilterComponent]
    });
    fixture = TestBed.createComponent(MarketingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
