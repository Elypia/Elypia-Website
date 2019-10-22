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

@NgModule({
  declarations: [
    ToolbarComponent,
    MobileToolbarMenuComponent,
    LocaleSelectionComponent,
    LoginFormComponent
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
    MatTooltipModule
  ],
  exports: [
    ToolbarComponent,
    MobileToolbarMenuComponent,
    LocaleSelectionComponent,
    LoginFormComponent
  ],
  entryComponents: [
    LocaleSelectionComponent,
    LoginFormComponent
  ]
})
export class ToolbarModule { }
