import {Component, Input} from '@angular/core';
import {Article} from '../../services/article/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() article: Article;

  /** Should this article include a link to the full page. */
  @Input() link: boolean = true;

  /** Is this article open in the UI. */
  @Input() open: boolean = false;
}
