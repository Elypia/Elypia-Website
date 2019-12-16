import {Component} from '@angular/core';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-press-kit-page',
  templateUrl: './press-kit-page.component.html',
  styleUrls: ['./press-kit-page.component.css']
})
export class PressKitPageComponent {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'Discover how you can reference our branding resources and under what guidelines ' +
             'you can use our Elypia\'s brand.'
  };

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle(environment.titlePrefix + ' | Press Kit');
    meta.updateTag(PressKitPageComponent.Description);
  }
}
