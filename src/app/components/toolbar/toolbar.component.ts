/*
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2019  Elypia CIC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {Component, HostListener, ViewChild} from '@angular/core';
import {ThemeService} from '../../services/theme/theme.service';
import {LoginFormComponent} from '../../dialogs/login-form/login-form.component';
import {MatDialog} from '@angular/material';
import {MobileToolbarMenuComponent} from '../../mobile-components/mobile-toolbar-menu/mobile-toolbar-menu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  /**
   * This defined the menu structure, it's passed to the {@link NestedTreeControl}
   * if on mobile, otherwise is read to create lots of buttons for desktop devices.
   */
  public readonly MenuTree: MenuNode[] = [
    { name: 'About', href: '/about' },
    {
      name: 'Projects',
      children: [
        { name: 'Alexis', href: 'https://gitlab.com/Elypia/alexis' },
        { name: 'Commandler', href: 'https://gitlab.com/Elypia/commandler' },
        { name: 'Elypiai', href: 'https://gitlab.com/Elypia/elypiai' }
      ]
    },
    {
      name: 'Support',
      children: [
        { name: 'Privacy Policy', href: '/support/privacy' },
        { name: 'ePrivacy Policy', href: '/support/eprivacy' }
      ]
    },
    { name: 'Donate', href: '/donate' }
  ];

  /** Child view of mobile toolbar to interact with it during resize. */
  @ViewChild(MobileToolbarMenuComponent, {static: false}) private readonly mobileToolbar: MobileToolbarMenuComponent;

  /** If the mobile toolbar should be visible to the user. */
  public mobileMenuVisible: boolean;

  public constructor(public themeService: ThemeService, public dialog: MatDialog) {

  }

  public openDialog(): void {
    this.dialog.open(LoginFormComponent);
  }

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
  private onResize(event) {
    if (event.target.innerWidth < 512)
      return;

    this.mobileMenuVisible = false;
    this.mobileToolbar.reset();
  }
}
