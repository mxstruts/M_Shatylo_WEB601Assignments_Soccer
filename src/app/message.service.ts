import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  constructor() {}
}
