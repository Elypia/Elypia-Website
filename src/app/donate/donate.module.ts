import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {DonateMethodComponent} from './donate-method/donate-method.component';
import {DonatePageComponent} from './donate-page/donate-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DonateMethodComponent,
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  exports: [
    DonateMethodComponent,
    DonatePageComponent
  ],
})
export class DonateModule { }
