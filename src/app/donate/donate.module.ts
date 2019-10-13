import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {FundMethodComponent} from './fund-method/fund-method.component';
import {DonateComponent} from './donate/donate.component';

@NgModule({
  declarations: [
    FundMethodComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    FundMethodComponent,
    DonateComponent
  ],
})
export class DonateModule { }
