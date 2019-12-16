/**
 * @license
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

/**
 * Used to define navigation menu elements for mobile
 * and desktop devices.
 *
 * @author seth@elypia.org (Seth Falco)
 */
export interface MenuNode {

  /** The name to display on the navigation element. */
  name: string;

  /**
   * If this is a flat element, where it links too.
   * This should be null if {@link children} is not non-null.
   */
  href?: string;

  /**
   * If this element has any child elements.
   * This should be null if {@link href} is not non-null.
   */
  children?: MenuNode[];
}
