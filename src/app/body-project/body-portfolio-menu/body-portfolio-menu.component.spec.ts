import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPortfolioMenuComponent } from './body-portfolio-menu.component';

describe('BodyPortfolioMenuComponent', () => {
  let component: BodyPortfolioMenuComponent;
  let fixture: ComponentFixture<BodyPortfolioMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyPortfolioMenuComponent]
    });
    fixture = TestBed.createComponent(BodyPortfolioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
