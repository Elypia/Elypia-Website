import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HaveibeenpwnedService {

  private static readonly BaseUrl: string = 'https://api.pwnedpasswords.com/';
  private static readonly Version: HttpHeaders = new HttpHeaders().set('api-version', '2');

  private static lastCheck: number = Date.now();

  constructor(private client: HttpClient) { }

  // public isBreached(password: string): Observable<PwnedPassword | null> {
  //   const now: number = Date.now();
  //
  //   if (now - HaveibeenpwnedService.lastCheck <= 1500)
  //     of(null);
  //
  //   HaveibeenpwnedService.lastCheck = now;
  //
  //   const hash: string = sha1(password);
  //   const req: string = hash.slice(0, 5);
  //   const rest: string = hash.slice(5);
  //
  //   return this.client.get<string>(
  //     HaveibeenpwnedService.BaseUrl + `range/${req}`,
  //     {headers: HaveibeenpwnedService.Version}
  //   ).pipe(
  //     map((response) => {
  //       const matches: string[] = response.split('\s+');
  //
  //       for (const match of matches) {
  //         const pwn = new PwnedPassword(req, match);
  //
  //         if (rest === pwn.hash)
  //           return pwn;
  //       }
  //
  //       return null;
  //     })
  //   );
  // }
}
