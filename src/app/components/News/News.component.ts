import { Component, Input } from '@angular/core'

@Component({
  selector: 'news',
  templateUrl: 'News.component.html',
  styleUrls: [ 'News.component.css' ]
})
export class NewsComponent {
  @Input() news: { title: string, date: string, content: string } 
}