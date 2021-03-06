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

export interface SocialLink {

  /** Where this social link goes. */
  link: string;

  /** The name of the social link for screen readers. */
  label: string;

  /** The FontAwesome icon used to represent tis social link. */
  icon: string;

  /** Additional relation attributes to append to the social link. */
  rel?: string[];
}
