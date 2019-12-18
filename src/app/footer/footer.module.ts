import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {SocialComponent} from './social/social.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FooterComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    SocialComponent
  ]
})
export class FooterModule { }
