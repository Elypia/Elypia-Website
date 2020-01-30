/**
 * @license
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2020  Elypia CIC
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

import {Component, Input, OnInit} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MenuNode} from '../toolbar';

/**
 * This is a mobile specific component which reveals a smaller
 * and easier to navigate toolbar for smaller resolution devices.
 * (Or just in browser when it's set small enough.)
 */
@Component({
  selector: 'app-mobile-toolbar-menu',
  templateUrl: './mobile-toolbar-menu.component.html',
  styleUrls: ['./mobile-toolbar-menu.component.css']
})
export class MobileToolbarMenuComponent implements OnInit {

  /** The menu items for users to navigate. */
  @Input() public readonly MenuTree: MenuNode[];

  /** The current page we're on. */
  @Input() public readonly currentPage: string;

  public readonly treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  public readonly dataSource = new MatTreeNestedDataSource<MenuNode>();

  public ngOnInit(): void {
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
