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

@Component({
  selector: 'app-projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'Discover the projects developed and maintained by Elypia and it\'s community ' +
             'and where contributions can be made, even if you don\' know how to code.'
  };

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle(environment.titlePrefix + ' | Projects');
    meta.updateTag(ProjectsPageComponent.Description);
  }
}
