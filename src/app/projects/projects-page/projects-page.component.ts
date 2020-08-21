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

import {Component, OnInit} from '@angular/core';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {GitLabProject, GitlabService} from '../gitlab.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'Discover the projects developed and maintained by Elypia and it\'s community ' +
             'and where contributions can be made, even if you don\' know how to code.'
  };

  /** A list of projects by ID that we're interesting in displaying. */
  private static readonly ProjectIds: number[] = [
    4821384, // Alexis
    16105346, // ImageCaster
    6095878, // Commandler
    4821538, // Elypiai
    18884886 // YAML4DeltaSpike
  ];

  public projects: GitLabProject[];

  constructor(
    private title: Title,
    private meta: Meta,
    private gitlabService: GitlabService
  ) {
    title.setTitle(environment.titlePrefix + ' | Projects');
    meta.updateTag(ProjectsPageComponent.Description);
  }

  ngOnInit(): void {
    this.gitlabService.getProjects(ProjectsPageComponent.ProjectIds).subscribe((projects) => {
      this.projects = projects;
    });
  }
}
