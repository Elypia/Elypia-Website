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

import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {

  /** If we are running in a production or development environment or locally. */
  production: false,

  /** The minimum logging level before printing to console. */
  loggingLevel: NgxLoggerLevel.TRACE,

  /** The endpoint that the API exists. */
  baseUrl: 'http://localhost:8081/api/',

  /** The prefix of the title to on the current page. */
  titlePrefix: 'Devypia'
};
