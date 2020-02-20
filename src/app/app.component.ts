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

import {Component, OnInit} from '@angular/core';
import {ThemeService} from './theme.service';
import {MenuNode} from './toolbar/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * This defined the menu structure, it's passed to the {@link NestedTreeControl}
   * if on mobile, otherwise is read to create lots of buttons for desktop devices.
   */
  public readonly MenuTree: MenuNode[] = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Donate', href: '/donate' },
    {
      name: 'Support',
      children: [
        { name: 'Press Kit', href: '/support/press-kit' },
        { name: 'Privacy Policy', href: '/support/privacy' }
      ]
    }
  ];

  constructor(
    public themeService: ThemeService
  ) {
    console.log('%cHold on!', 'color: red; font-size: 64px;');
    console.log('If someone\'s told you to open this panel or console to perform ' +
      'commands or check something on your browser, chances are they\'re trying to access ' +
      'sensitive information which could compromise your account or data. ' +
      'Only continue if you know what you\'re doing; if you do know what you\'re doing ' +
      'feel free to contribute to our projects-page at <https://gitlab.com/Elypia>!');
  }

  ngOnInit(): void {
    this.themeService.loadTheme();
  }
}
