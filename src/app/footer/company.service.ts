import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * The registered address of a company in the UK.
 *
 * @since 1.4.0
 */
export interface CompanyAddress {
  addressLine1: string;
  addressLine2: string;
  country: string;
  locality: string;
  poBox: string;
  region: string;
  careOf: string;
  etag: string;
  premises: string;
  postalCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  /** The endpoint to query company information from our backend. */
  private static readonly BaseEndpoint: string = environment.backendEndpoint + 'company/';

  constructor(private client: HttpClient) { }

  public getAddress(): Observable<CompanyAddress> {
    return this.client.get<CompanyAddress>(CompanyService.BaseEndpoint + 'address');
  }
}
