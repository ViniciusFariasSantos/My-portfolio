import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyPortfolioComponent } from './body-project/body-portfolio/body-portfolio.component';
import { BodyPortfolioMenuComponent } from './body-project/body-portfolio-menu/body-portfolio-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    BodyPortfolioMenuComponent,
    BodyPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule, 
    MatFormFieldModule, 
    MatSelectModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    BodyPortfolioComponent, 
    BodyPortfolioMenuComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
