/*
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2019  Elypia CIC
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
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {CommentComponent} from './components/comment/comment.component';
import {MarkdownModule, MarkdownModuleConfig, MarkedOptions} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ArticlePageComponent} from './pages/article/article-page.component';
import {LoginFormComponent} from './dialogs/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ElyEqualsModule, ElyLoadableModule, ElyStatefulButtonModule, ElyTimestampModule} from '@elypia/ng-elypian';
import {AboutComponent} from './pages/about/about.component';
import {OverlayContainer} from '@angular/cdk/overlay';
import {SocialComponent} from './components/social/social.component';
import {DonateComponent} from './pages/donate/donate.component';
import {MatCardModule, MatDialogModule, MatMenuModule, MatTableModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {LoggerConfig, LoggerModule} from 'ngx-logger';
import {environment} from '../environments/environment';
import {FundMethodComponent} from './components/fund-method/fund-method.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';
import {EprivacyComponent} from './pages/eprivacy/eprivacy.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MobileToolbarMenuComponent} from './mobile-components/mobile-toolbar-menu/mobile-toolbar-menu.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const appRoutes: Routes = [
  /** Useless without API */
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'login-form', component: LoginFormComponent },

  /** Works without API, may lose some features. */
  { path: 'support/privacy', component: PrivacyComponent },
  { path: 'support/eprivacy', component: EprivacyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'donate', component: DonateComponent },
  { path: '', component: HomeComponent },

  /** Redirect instead of 404 */
  { path: '**', redirectTo: '' },
];

const loggerConfig: LoggerConfig = {
  level: environment.loggingLevel
};

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain,
    secure: environment.https
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'info'
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
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    CommentComponent,
    ArticlePageComponent,
    LoginFormComponent,
    AboutComponent,
    SocialComponent,
    DonateComponent,
    FundMethodComponent,
    PrivacyComponent,
    EprivacyComponent,
    ProjectsComponent,
    MobileToolbarMenuComponent,
  ],
  imports: [
    // Configured
    RouterModule.forRoot(appRoutes),
    LoggerModule.forRoot(loggerConfig),
    MarkdownModule.forRoot(markdownOptions),
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    ElyLoadableModule,
    ElyTimestampModule,
    ElyEqualsModule,
    ElyStatefulButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('elypia-light-theme');
  }
}
