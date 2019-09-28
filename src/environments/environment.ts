import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {

  /** If we are running in a production or development environment or locally. */
  production: false,

  domain: 'localhost',

  https: false,

  /** The minimum logging level before printing to console. */
  loggingLevel: NgxLoggerLevel.TRACE,

  /** The endpoint that the API exists. */
  baseUrl: 'http://localhost:8081/api/'
};
