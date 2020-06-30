import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * @since 1.4.0
 */
export interface LanguageStatistics {
  languageName: string;
  languageCode: string;
  translatedStringsPercentage: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeblateService {

  /** Base endpoint to call the Weblate API. */
  private static readonly BaseEndpoint: string = environment.backendEndpoint + 'weblate/';

  /** Endpoint to get project languages. */
  private static readonly ProjectLanguageEndpoint: string = WeblateService.BaseEndpoint + 'projects/languages';

  constructor(private client: HttpClient) { }

  /**
   * @param projectSlug The slug of the project to get.
   * @returns An oberservable with all translation statistics by language
   * for the specified project.
   */
  public getProjectLanguageStatistics(projectSlug: string): Observable<LanguageStatistics[]> {
    return this.client.get<LanguageStatistics[]>(WeblateService.ProjectLanguageEndpoint, {
      params: {
        project_slug: projectSlug
      }
    });
  }
}
