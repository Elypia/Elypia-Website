import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  public isDynamicMode(): boolean {
    return !environment.staticMode;
  }

  public isStaticMode(): boolean {
    return environment.staticMode;
  }
}
