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
    {link: 'https://discord.com/invite/hprGMaM', label: 'Discord', icon: 'discord'},
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
