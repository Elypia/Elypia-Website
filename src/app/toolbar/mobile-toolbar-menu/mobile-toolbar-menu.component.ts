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
