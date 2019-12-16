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

export enum LoginFormType {

  /** Used to login to an existing account. */
  LOGIN,

  /** Used to register a new account. */
  REGISTER,

  /** Used to reset the password of an existing account. */
  RESET
}

export default interface LoginForm {

  /** This is always required to make an account, login-form, or reset your password. */
  email: string;

  /** This is required to login-form, or create an account. */
  password?: string;

  /** This is required when registring for a new account. */
  verifyPassword?: string;
}
