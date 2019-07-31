import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article/article.service';
import {Article} from '../../classes/article';
import {EnvironmentService} from '../../services/environment/environment.service';
import {LoadState} from '@elypia/ng-elypian';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles: Article[];
  public state: LoadState;

  constructor(
    private env: EnvironmentService,
    private articleService: ArticleService
  ) {
    this.state = LoadState.NotLoaded;
  }

  ngOnInit() {
    this.state = LoadState.Loading;

    this.articleService.getRecent().subscribe((articles) => {
      this.articles = articles;
      this.state = LoadState.Loaded;
    }, () => this.state = LoadState.Failed);
  }
}
