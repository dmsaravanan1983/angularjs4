import { Component } from '@angular/core';
@Component({
  selector:'heroImage',
  template:`hero image goes here {{heroName}} age is {{callMethod()}}`
})
export class HeroComponent {
  heroName:string= "Saravanan";
  heroAge:number= 34;
  callMethod(){
    return this.heroAge;
  }
}
