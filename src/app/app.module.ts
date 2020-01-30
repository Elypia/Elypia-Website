/**
 * @license
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2020  Elypia CIC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './main/home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {MarkdownModule, MarkdownModuleConfig, MarkedOptions} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ArticlePageComponent} from './article/article-page/article-page.component';
import {LoginFormComponent} from './toolbar/login-form/login-form.component';
import {ElyEqualsModule, ElyLoadableModule, ElyStatefulButtonModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {AboutPageComponent} from './main/about-page/about-page.component';
import {DonatePageComponent} from './donate/donate-page/donate-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {LoggerConfig, LoggerModule} from 'ngx-logger';
import {environment} from '../environments/environment';
import {PrivacyPageComponent} from './main/privacy-page/privacy-page.component';
import {ProjectsPageComponent} from './projects/projects-page/projects-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ToolbarModule} from './toolbar/toolbar.module';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {DonateModule} from './donate/donate.module';
import {ArticleModule} from './article/article.module';
import {MatMenuModule} from '@angular/material/menu';
import {PressKitPageComponent} from './press-kit/press-kit-page/press-kit-page.component';
import {PressKitModule} from './press-kit/press-kit.module';
import {ProjectsModule} from './projects/projects.module';
import {FooterModule} from './footer/footer.module';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faDiscord} from '@fortawesome/free-brands-svg-icons/faDiscord';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faLinkedin, faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import {faTwitch} from '@fortawesome/free-brands-svg-icons/faTwitch';
import {faGitlab} from '@fortawesome/free-brands-svg-icons/faGitlab';
import {faChevronDown} from '@fortawesome/pro-duotone-svg-icons/faChevronDown';
import {faLanguage} from '@fortawesome/pro-solid-svg-icons/faLanguage';
import {faEllipsisV} from '@fortawesome/pro-solid-svg-icons/faEllipsisV';
import {faFillDrip} from '@fortawesome/pro-solid-svg-icons/faFillDrip';
import {faCircle} from '@fortawesome/pro-duotone-svg-icons/faCircle';
import {faInfoCircle} from '@fortawesome/pro-solid-svg-icons/faInfoCircle';
import {faCopyright} from '@fortawesome/pro-regular-svg-icons/faCopyright';
import {faUniversity} from '@fortawesome/pro-solid-svg-icons/faUniversity';
import {faCreditCard} from '@fortawesome/pro-solid-svg-icons/faCreditCard';
import {faPaypal} from '@fortawesome/free-brands-svg-icons/faPaypal';
import {faTshirt} from '@fortawesome/pro-solid-svg-icons/faTshirt';
import {faDownload} from '@fortawesome/pro-solid-svg-icons/faDownload';
import {faPaste} from '@fortawesome/pro-duotone-svg-icons/faPaste';
import {CopiedClipboardComponent} from './snackbar-components/copied-clipboard/copied-clipboard.component';
import {faMastodon} from '@fortawesome/free-brands-svg-icons/faMastodon';

const appRoutes: Routes = [
  /** Useless without API */
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'login-form', component: LoginFormComponent },

  /** Works without API, may lose some features. */
  { path: 'support/press-kit', component: PressKitPageComponent },
  { path: 'support/privacy', component: PrivacyPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'donate', component: DonatePageComponent },
  { path: '', component: HomePageComponent },

  /** Redirect instead of 404 */
  { path: '**', redirectTo: '' },
];

const loggerConfig: LoggerConfig = {
  level: environment.loggingLevel
};

const markdownOptions: MarkdownModuleConfig = {
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      tables: true,
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    PrivacyPageComponent,
    CopiedClipboardComponent
  ],
  imports: [
    // Configured
    RouterModule.forRoot(appRoutes),
    LoggerModule.forRoot(loggerConfig),
    MarkdownModule.forRoot(markdownOptions),

    // Modules Defined in this Application
    ArticleModule,
    DonateModule,
    FooterModule,
    PressKitModule,
    ProjectsModule,
    ToolbarModule,

    // Modules from Angular Elypian
    ElyLoadableModule,
    ElyTimestampModule,
    ElyEqualsModule,
    ElyStatefulButtonModule,

    // Material Angular
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatMenuModule,

    // FontAwesome
    FontAwesomeModule,

    // Angular Modules
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private library: FaIconLibrary) {
    library.addIcons(
      // Toolbar
      faChevronDown,
      faLanguage,
      faEllipsisV,
      faFillDrip,
      faCircle,

      // Social
      faLinkedin,
      faMastodon,
      faGitlab,
      faTwitter,
      faRedditAlien,
      faTwitch,
      faDiscord,

      // Donate
      faUniversity,
      faCreditCard,
      faPaypal,
      faTshirt,
      faPaste,

      // Press Kit
      faDownload,

      // Footer
      faCopyright,

      // Misc
      faInfoCircle
    );
  }
}
