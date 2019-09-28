import {Component} from '@angular/core';
import {ThemeService} from '../../theme/theme.service';
import {LoginFormComponent} from '../../dialogs/login-form/login-form.component';
import {MatDialog} from '@angular/material';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  children?: MenuNode[];
}

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
  TreeMenu: MenuNode[] = [
    { name: 'About' },
    {
      name: 'Projects',
      children: [
        { name: 'Alexis' },
        { name: 'Commandler' },
        { name: 'Elypiai' }
      ]
    },
    {
      name: 'Support',
      children: [
        { name: 'Privacy Policy' },
        { name: 'ePrivacy Policy' }
      ]
    },
    { name: 'Donate' }
  ];

  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor(public themeService: ThemeService, public dialog: MatDialog) {
    this.dataSource.data = this.TreeMenu;
  }

  public openDialog(): void {
    this.dialog.open(LoginFormComponent);
  }

  public hasChild(_: number, node: MenuNode): boolean {
    return !!node.children && node.children.length > 0;
  }
}
