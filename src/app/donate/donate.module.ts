/*
 * Copyright 2019-2020 Elypia CIC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
