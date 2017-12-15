import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  /*
   * Inject the ActivatedRoute, HeroService, and Location services into the constructor, 
   * saving their values in private fields:
   */
  constructor(
    /* 
     * The ActivatedRoute holds information about the route to this instance   
     * This component is interested in the route's bag of parameters extracted from the URL. 
     * The "id" parameter is the id of the hero to display.
     */
    private route: ActivatedRoute,
    // The HeroService gets hero data from the remote server
    private heroService: HeroService,
    // The location is an Angular service for interacting with the browser.
    private location: Location) { }

  // In the ngOnInit() 'lifecycle hook' call getHero()
  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /*
     * The route.snapshot is a static image of the route information 
     * shortly after the component was created.
     * The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
     */
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}