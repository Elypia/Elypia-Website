import {Component, Input} from '@angular/core';
import {ArticleComment} from '../../classes/articleComment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: ArticleComment;
}
