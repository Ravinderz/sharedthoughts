import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User.class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User;
  recentArticles: any;

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.user = {
      'firstName' : "Ravinder",
      'lastName' : "Singh",
      'email' : "ravinderz@outlook.com",
      'password' : "123456",
      'phone' : 1234567890,
      'stats' : {
          'articles_count':10,
          'popularity_index':8.6,
          'authors_following':["Jon Snow","Awesome"]
      },
      'isActive' :true,
      'profileImage': "../../assets/pp.jpg",
      'interests': ["Games","Technology","Photography"],
      'createdTime' : new Date(),
      'updatedTime' : new Date(),
    }

    this.recentArticles = [
                      {
                        'article_title':'Big Tech and Amazon: too powerful to break up?',
                        'article_content':'While Google, Facebook and Twitter are set for a grilling in Congress over Russia, it is the online retailer that is drawing intense scrutiny.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'Life Is Math — Not Magic',
                        'article_content':'Some say life is like chess, running a marathon, or playing a video game. I like those simplified looks on life because it’s already complicated enough.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'Welcome to SpaceX City: The Ultimate Startup',
                        'article_content':'How the private space industry will reinvent economics, exploration, and humanity.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'My stupid excuses for not writing',
                        'article_content':'My stupid excuses for not writing, Its been fun writing articles to my heart content, but here are my excuses',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'200 free online courses',
                        'article_content':'200 universities just launched 560 free online courses. Here’s the full list.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'Big Tech and Amazon: too powerful to break up?',
                        'article_content':'While Google, Facebook and Twitter are set for a grilling in Congress over Russia, it is the online retailer that is drawing intense scrutiny.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'Life Is Math — Not Magic',
                        'article_content':'Some say life is like chess, running a marathon, or playing a video game. I like those simplified looks on life because it’s already complicated enough.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'Welcome to SpaceX City: The Ultimate Startup',
                        'article_content':'How the private space industry will reinvent economics, exploration, and humanity.',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'My stupid excuses for not writing',
                        'article_content':'My stupid excuses for not writing, Its been fun writing articles to my heart content, but here are my excuses',
                        'article_date':'Oct 30'
                      },
                      {
                        'article_title':'200 free online courses',
                        'article_content':'200 universities just launched 560 free online courses. Here’s the full list.',
                        'article_date':'Oct 30'
                      }
                    ]

  }

}
