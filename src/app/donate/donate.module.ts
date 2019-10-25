import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {FundMethodComponent} from './fund-method/fund-method.component';
import {DonatePageComponent} from './donate-page/donate-page.component';

@NgModule({
  declarations: [
    FundMethodComponent,
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    FundMethodComponent,
    DonatePageComponent
  ],
})
export class DonateModule { }
