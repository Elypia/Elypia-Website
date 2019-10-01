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

  public hasChild(_: number, node: MenuNode): boolean {
    return !!node.children && node.children.length > 0;
  }
}
