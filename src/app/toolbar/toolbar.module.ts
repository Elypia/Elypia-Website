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

@NgModule({
  declarations: [
    ToolbarComponent,
    MobileToolbarMenuComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    MobileToolbarMenuComponent
  ]
})
export class ToolbarModule { }
