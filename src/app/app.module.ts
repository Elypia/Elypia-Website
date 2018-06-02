import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/Navbar/Navbar.component'
import { NewsListComponent } from './layout/NewsList/NewsList.component'
import { FooterComponent } from './layout/Footer/Footer.component'
import { NewsComponent } from './components/News/News.component'
import { DiscordComponent } from './layout/Discord/Discord.component'
import { LogoComponent } from './components/Logo/Logo.component'
import { LoginComponent } from './components/LoginForm/LoginForm.component'
import { BoobsComponent } from './components/Boobs/Boobs.component'
import { DropdownComponent } from './components/Dropdown/Dropdown.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DiscordComponent,
    NewsListComponent,
    NewsComponent,
    LogoComponent,
    BoobsComponent,
    FooterComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
