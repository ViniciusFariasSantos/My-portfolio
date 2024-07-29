import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-body-portfolio-menu',
  templateUrl: './body-portfolio-menu.component.html',
  styleUrls: ['./body-portfolio-menu.component.scss']
})
export class BodyPortfolioMenuComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public currentItem: boolean = false;

  public viewMenu() {
    this.currentItem = true;
  }
  public callBackValueValidate (callback: boolean) {
    this.currentItem = callback;
  }
}
