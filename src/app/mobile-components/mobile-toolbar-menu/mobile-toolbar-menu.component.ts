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

import {Component} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  href?: string;
  children?: MenuNode[];
}

@Component({
  selector: 'app-mobile-toolbar-menu',
  templateUrl: './mobile-toolbar-menu.component.html',
  styleUrls: ['./mobile-toolbar-menu.component.css']
})
export class MobileToolbarMenuComponent {

  /**
   * This defined the menu structure, it's passed to the {@link NestedTreeControl}
   * if on mobile, otherwise is read to create lots of buttons for desktop devices.
   */
  MenuTree: MenuNode[] = [
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

  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor() {
    this.dataSource.data = this.MenuTree;
  }

  /**
   * Reset the mobile component. This is useful if the menu has been
   * hidden either manually or because of the resolution changing.
   */
  public reset(): void {
    this.treeControl.collapseAll();
  }

  public hasChild(_: number, node: MenuNode): boolean {
    return !!node.children && node.children.length > 0;
  }
}
