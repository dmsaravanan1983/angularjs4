import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../shared/service/recipe.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() recipe;
  recipeService: RecipesService;

  constructor(recipeService: RecipesService) {
    this.recipeService = recipeService;
  }
  ngOnInit() {
  }

  onAssign(side) {
    this.recipeService.onSideSelect({name: this.recipe.name, side: side });
  }
}
