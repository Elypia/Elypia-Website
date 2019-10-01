import {Component, Input} from '@angular/core';
import {ArticleComment} from '../../services/article/article';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: ArticleComment;
}
