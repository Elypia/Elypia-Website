import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {DonateMethodComponent} from './donate-method/donate-method.component';
import {DonatePageComponent} from './donate-page/donate-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DonateMethodComponent,
    DonatePageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    ClipboardModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  exports: [
    DonateMethodComponent,
    DonatePageComponent
  ],
})
export class DonateModule { }
