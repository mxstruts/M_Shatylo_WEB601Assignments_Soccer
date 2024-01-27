// content-card.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.addContent({
      id: 1,
      title: 'Sample Title 1',
      description: 'Sample Description 1',
      creator: 'Creator 1',
      imgURL: 'path/to/image1.jpg',
      type: 'Type 1',
      tags: ['Tag1', 'Tag2']
    });
  }

  ngOnInit(): void {}
}
