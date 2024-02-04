import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: 'Erling Haaland',
      description: 'Having broken the single season Premier League goalscoring record, won the treble, and looked genuinely unstoppable for 99.9% of 2023, its easy to see why, too.',
      creator: 'Maksym',
      type: 'Man City',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrqek4ds8hf6d51mq.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },
    {
      id: 2,
      title: 'Jude Bellingham',
      description: 'In 2023, Jude Bellingham became a superstar',
      creator: 'Maksym',
      type: 'Real Madrid',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_887,h_591,x_23,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrq8qzg2njgnx8sqm.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },
    {
      id: 3, 
      title: 'Rodri',
      description: 'The best football team in the worlds most important player - that tells you all you need to know about Rodri',
      creator: 'Maksym',
      type: 'Man City',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrq6z92chw60vwr2a.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },
    {
      id: 4, 
      title: 'Harry Kane',
      description: 'After years of speculation, Harry Kane finally left Tottenham Hotspur in 2023. joining Bayern Munich.',
      creator: 'Maksym',
      type: 'Bayern',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrq5cym1a1kas7kr0.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },
    {
      id: 5,
      title: 'Kylian Mbappe',
      description: 'His final full year at Paris Saint-Germain Probably',
      creator: 'Maksym',
      type: 'PSG',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_877,h_584,x_58,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrq2b2xee49dzr6t2.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },
    {
      id: 6, 
      title: 'Kevin De Bruyne',
      description: 'If Kevin De Bruyne had played a single full game of football at the start of the 2023/24 season, hed be much higher on this list',
      creator: 'Maksym',
      type: 'Man City',
      imgURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hjrpw91cjdhbqnhta5.jpg',
      tags: ['Soccer ', 'Winner ', 'Top'],
    },

  ]

  constructor() {
     
  }
}