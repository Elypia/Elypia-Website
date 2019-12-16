import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {SocialComponent} from './social/social.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FooterComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    FooterComponent,
    SocialComponent
  ]
})
export class FooterModule { }
