import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export interface GitLabGroup {
  id: number;
  name: string;
  url: string;
  fullPath: string;
  projects: GitLabProject[];
}

/**
 * @since 1.4.0
 */
export interface GitLabProject {
  id: number;
  url: string;
  avatarUrl: string;
  name: string;
  description: string;
  isPublic: boolean;
  stars: number;
  createdAt: Date;
}

/**
 * @since 1.4.0
 */
@Injectable({
  providedIn: 'root'
})
export class GitlabService {

  private static readonly BaseEndpoint: string = environment.backendEndpoint + 'gitlab/';

  constructor(private client: HttpClient) { }

  public getGroupInfo(): Observable<GitLabGroup> {
    return this.client.get<GitLabGroup>(GitlabService.BaseEndpoint + 'group');
  }

  public getProjects(projectIds: number[] = []): Observable<GitLabProject[]> {
    return this.client.get<GitLabProject[]>(GitlabService.BaseEndpoint + 'projects', {
      params: {
        projectIds: projectIds.map((projectId) => projectId.toString())
      }
    });
  }
}
