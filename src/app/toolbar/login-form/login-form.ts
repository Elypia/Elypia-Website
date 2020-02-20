/*
 * Copyright 2019-2020 Elypia CIC
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
