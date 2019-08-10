import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {

  /** If we are running in a production or development environment or locally. */
  production: true,

  domain: 'elypia.com',

  https: true,

  /** The minimum logging level before printing to console. */
  loggingLevel: NgxLoggerLevel.WARN,

  /** The endpoint that the API exists. */
  baseUrl: '/api/'
};
