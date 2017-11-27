import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredStories : String[] = ["Big Tech and Amazon: too powerful to break up?","Life Is Math — Not Magic","Welcome to SpaceX City: The Ultimate Startup","My stupid excuses for not writing","200 universities just launched 560 free online courses. Here’s the full list."];
  topAuthors : String[] = ["Sindhu Reddy","Ravinder Singh","Praveen Machavaram","Bharath Devanga","Ibrahim Shaik"];
  recentArticles : any;

  constructor() { }

  ngOnInit() {
    this.recentArticles = [{'article_title':"Big Tech and Amazon: too powerful to break up?",
                            'article_text':"While Google, Facebook and Twitter are set for a grilling in Congress over Russia, it is the online retailer that is drawing intense scrutiny.",
                          'article_author':"Ravinder Singh",
                          'date':"Oct 30"},
                          {'article_title':"Life Is Math — Not Magic",
                          'article_text':"Some say life is like chess, running a marathon, or playing a video game. I like those simplified looks on life because it’s already complicated enough.",
                        'article_author':"Praveen Kumar",
                        'date':"Oct 30"},
                        {'article_title':"My stupid excuses for not writing",
                        'article_text':"My stupid excuses for not writing, Its been fun writing articles to my heart content, but here are my excuses",
                      'article_author':"Sindhu Reddy",
                      'date':"Oct 30"},
                      {'article_title':"200 free online courses",
                      'article_text':"200 universities just launched 560 free online courses. Here’s the full list.",
                    'article_author':"Bharath Devanga",
                    'date':"Oct 30"},
                    {'article_title':"Welcome to SpaceX City: The Ultimate Startup",
                    'article_text':"How the private space industry will reinvent economics, exploration, and humanity.",
                  'article_author':"Manoj",
                  'date':"Oct 30"}
                        ]
  }

}
