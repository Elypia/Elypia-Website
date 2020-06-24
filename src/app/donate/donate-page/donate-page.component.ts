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

import {Component} from '@angular/core';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CopiedClipboardComponent} from '../../main/snackbar-components/copied-clipboard/copied-clipboard.component';

@Component({
  selector: 'app-donate',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.css']
})
export class DonatePageComponent {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'Support Elypia by using any of the methods to donate which include bank transfer, ' +
             'card, PayPal, or buying merchandise on Redbubble.'
  };

  constructor(private titleService: Title, private meta: Meta, private matSnackBar: MatSnackBar) {
    titleService.setTitle(environment.titlePrefix + ' | Donate');
    meta.updateTag(DonatePageComponent.Description);
  }

  public displayMessage() {
    this.matSnackBar.openFromComponent(CopiedClipboardComponent, {
      duration: 2000,
      politeness: 'polite',
      horizontalPosition: 'right'
    });
  }
}
