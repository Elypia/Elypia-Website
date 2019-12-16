import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {DonateMethodComponent} from './donate-method/donate-method.component';
import {DonatePageComponent} from './donate-page/donate-page.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DonateMethodComponent,
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    DonateMethodComponent,
    DonatePageComponent
  ],
})
export class DonateModule { }
