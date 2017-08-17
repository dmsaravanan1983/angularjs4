import { Component, OnInit, Output } from '@angular/core';
import { RecipesService } from '../shared/service/recipe.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  recipes = [];
  chosenSide = 'all';
  recipeService: RecipesService;

  constructor(recipeService: RecipesService) {
    this.recipeService = recipeService;
  }

  ngOnInit() {
  }
  onSelect(side){
    this.chosenSide = side;
  }

  getRecipes(){
    this.recipes = this.recipeService.getRecipes(this.chosenSide);
    return this.recipes;
  }
}
