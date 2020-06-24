import {Component, OnInit} from '@angular/core';
import {LicensesService} from './licenses.service';
import {NGXLogger} from 'ngx-logger';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-licenses-page',
  templateUrl: './licenses-page.component.html',
  styleUrls: ['./licenses-page.component.css']
})
export class LicensesPageComponent implements OnInit {

  /** Description for search engines to display to users about this page. */
  private static readonly Description: MetaDefinition = {
    name: 'description',
    content: 'The licenses of all open-source libraries we\'re depending on to make this website!'
  };

  public licensesText: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private logger: NGXLogger,
    private licensesService: LicensesService
  ) {
    titleService.setTitle(environment.titlePrefix + ' | OSS Licenses');
    meta.updateTag(LicensesPageComponent.Description);
  }

  ngOnInit() {
    this.licensesService.get3rdPartyLicensesRaw().subscribe((text) => {
      this.logger.debug('Finished loading 3rdpartylicenes.txt');
      this.licensesText = text;
    });
  }
}
