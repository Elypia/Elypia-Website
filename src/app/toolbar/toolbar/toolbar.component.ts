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

import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from '../../main/theme.service';
import {LoginFormComponent} from '../login-form/login-form.component';
import {MatDialog} from '@angular/material/dialog';
import {MobileToolbarMenuComponent} from '../mobile-toolbar-menu/mobile-toolbar-menu.component';
import {NavigationStart, Router, RouterEvent} from '@angular/router';
import {NGXLogger} from 'ngx-logger';
import {MenuNode} from '../toolbar';
import {LocaleSelectionComponent} from '../locale-selection/locale-selection.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  /** The menu items for users to navigate. */
  @Input() public readonly MenuTree: MenuNode[];

  /** Child view of mobile toolbar to interact with it during resize. */
  @ViewChild(MobileToolbarMenuComponent) private readonly mobileToolbar: MobileToolbarMenuComponent;

  /** If the mobile toolbar should be visible to the user. */
  public mobileMenuVisible: boolean;

  /** The relative name to the current page we're on. */
  public currentPage: string;

  public constructor(
    public router: Router,
    public themeService: ThemeService,
    public dialog: MatDialog,
    private logger: NGXLogger
  ) {

  }

  public ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const url: string = event.url;

        this.currentPage = url
          .split('#', 1)[0]
          .split('?', 1)[0];

        this.logger.debug('Current page is:', this.currentPage);
      }
    });
  }

  public openLoginDialog(): void {
    this.dialog.open(LoginFormComponent);
  }

  public openLocaleDialog(): void {
    this.dialog.open(LocaleSelectionComponent, {
      width: '360px'
    });
  }

  /**
   * Invert the visibility of the mobile menu,
   * if this is set to invisible then reset the menu as well.
   */
  public onMobileMenuToggle(): void {
    this.mobileMenuVisible = !this.mobileMenuVisible;

    if (this.mobileMenuVisible === false)
      this.mobileToolbar.reset();
  }

  /**
   * On resize, if the screen has grown so mobile components
   * are hidden, reset mobile components.
   *
   * @param event The window reset event that triggered this check.
   */
  @HostListener('window:resize', ['$event'])
  private onResize(event): void {
    if (event.target.innerWidth < 512)
      return;

    this.mobileMenuVisible = false;
    this.mobileToolbar.reset();
  }
}
