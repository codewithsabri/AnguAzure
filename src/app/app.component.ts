import { Component } from '@angular/core';
import { TweetComponent } from './Children/tweets/tweets.component';
import { CommonModule } from '@angular/common';

interface Tweet {
  id: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TweetComponent, CommonModule],
})
export class AppComponent {
  tweets: Tweet[] = [
    { id: 1, text: 'This is the first tweet' },
    { id: 2, text: 'This is the second tweet' },
  ];

  receivedTweetIds: number[] = [];

  handleTweetId(id: number) {
    this.receivedTweetIds.push(id);
  }
}
