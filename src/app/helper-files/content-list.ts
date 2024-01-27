import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  getContents(): Content[] {
    return this.contentArray;
  }

  addContent(content: Content): void {
    this.contentArray.push(content);
  }

  getNumberOfItems(): number {
    return this.contentArray.length;
  }

  getContentDetails(index: number): string {
    const item = this.contentArray[index];
    return `<div>Title: ${item.title}</div>
            <div>Description: ${item.description}</div>
            <div>Creator: ${item.creator}</div>
            <div>Image: <img src="${item.imgURL}" alt="image"></div>
            <div>Type: ${item.type}</div>`;
  }
}
