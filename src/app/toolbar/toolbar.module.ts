/*
 * Copyright 2019-2020 Elypia CIC and Contributors
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
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MobileToolbarMenuComponent} from './mobile-toolbar-menu/mobile-toolbar-menu.component';
import {MatTreeModule} from '@angular/material/tree';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LocaleSelectionComponent} from './locale-selection/locale-selection.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ElyEqualsModule, ElyStatefulButtonModule} from '@elypia/ng-elypian';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {PercentageComponent} from './percentage/percentage.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    MobileToolbarMenuComponent,
    LocaleSelectionComponent,
    LoginFormComponent,
    PercentageComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    ElyEqualsModule,
    MatInputModule,
    MatCheckboxModule,
    ElyStatefulButtonModule,
    MatTooltipModule,
    FontAwesomeModule,
    MatSelectModule
  ],
  exports: [
    ToolbarComponent,
    MobileToolbarMenuComponent,
    LocaleSelectionComponent,
    LoginFormComponent,
    MatChipsModule
  ]
})
export class ToolbarModule { }
