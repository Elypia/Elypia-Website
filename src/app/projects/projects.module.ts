import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {ProjectComponent} from './project/project.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ProjectsPageComponent,
    ProjectComponent
  ]
})
export class ProjectsModule { }
