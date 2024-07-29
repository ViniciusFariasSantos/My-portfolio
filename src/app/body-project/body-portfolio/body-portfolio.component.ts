import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-body-portfolio',
  templateUrl: './body-portfolio.component.html',
  styleUrls: ['./body-portfolio.component.scss'],
  
})
export class BodyPortfolioComponent implements OnChanges {
  @Input() validateSidNavTrue!: boolean;
  @Output() validateSidNavFalse = new EventEmitter<any>;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  reason = '';
  constructor(){
  }
  ngOnChanges(){
    if(this.validateSidNavTrue == true) {
      this.sidenav.open();
    }
    this.validateSidNavFalse.emit(false)
  }
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  
}
