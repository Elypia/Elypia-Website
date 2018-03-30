import { Component } from '@angular/core'

@Component({
  selector: 'news-list',
  templateUrl: 'NewsList.component.html',
  styleUrls: [ 'NewsList.component.css' ]
})
export class NewsListComponent {
  news = [
    { title: 'Progress Report III', date: '29th of March 2018',
      content: 'Dropdowns are now components and can be easly created. Now it is JSON object with title, href and children variables.\
      <br>Another news is that seth is mean and told Abba to stop boobs imitator and now he will do it himself.'
    },
    { title: 'Progress Report II', date: '29th of March 2018',
      content: 'Site is working with Angular framework, news are now stored in an array so we are able to loop through them.\
      <br>I am about to to make dropdown component and then wait for Ashtma to finish boobs imitator.'
    }, 
    { title: 'Progress Report I', date: '9th of November 2017',
      content: 'Dropdowns are working.. somehow.\
      <br>Fixed not working Arrows on Chrome browser and adjusted some HD issues. \
      <br>Now im a blogger so more posts soon guys!'
    }
  ]
}