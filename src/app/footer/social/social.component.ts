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

import {Component} from '@angular/core';
import {SocialLink} from './social-link';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  /** The default relations to add to all social links. */
  private static readonly DefaultRelations: string[] = [
    'noopener',
    'external'
  ];

  /** A list of all social links Elypia has. */
  socialLinks: SocialLink[] = [
    {link: 'https://www.linkedin.com/company/elypia/', label: 'LinkedIn', icon: 'linkedin'},
    {link: 'https://mastodon.social/@elypia', label: 'Mastodon', icon: 'mastodon', rel: ['me']},
    {link: 'https://twitter.com/Elypia', label: 'Twitter', icon: 'twitter'},
    {link: 'https://discordapp.com/invite/hprGMaM', label: 'Discord', icon: 'discord'},
    {link: 'https://reddit.com/r/elypia/', label: 'Reddit', icon: 'reddit-alien'},
    {link: 'https://twitch.tv/elypiacic', label: 'Twitch', icon: 'twitch'},
    {link: 'https://gitlab.com/Elypia', label: 'GitLab', icon: 'gitlab'},
  ];

  /**
   * Set the relations on social links using
   * {@link DefaultRelations} and {@link SocialLink.rel}.
   *
   * @returns The string to set the rel attribute on a tags.
   */
  public setRelations(rel: string[]): string {
    let result: string[] = SocialComponent.DefaultRelations;

    if (rel)
      result = result.concat(rel);

    return result.join(' ');
  }
}
