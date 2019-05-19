import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../classes/article';
import {CommentService} from '../../services/comment/comment.service';
import {ArticleComment} from '../../classes/articleComment';
import {LoadState} from '@elypia/elypian-angular';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public article: Article;
  public articleState: LoadState = LoadState.NotLoaded;

  public comments: ArticleComment[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id'))
        return;

      const id: number = Number(paramMap.get('id'));

      this.articleState = LoadState.Loading;
      this.articleService.getSingle(id).subscribe((article) => {
        this.article = article;
        this.articleState = LoadState.Loaded;
      }, () => this.articleState = LoadState.Failed);

      this.commentService.paginate(id, 0).subscribe((comments) => {
        this.comments = comments.content;
      });
    });
  }
}
