import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

interface Tweet {
  id: number;
  text: string;
}

@Component({
  selector: 'tweet',
  standalone: true,
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetComponent {
  @Input() data: Tweet = { id: 5, text: 'Exemple de tweet' };
  @Output() emitTweetId = new EventEmitter<number>();

  emitId() {
    this.emitTweetId.emit(this.data.id);
  }
}
