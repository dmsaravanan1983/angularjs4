import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/service/recipe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  defaultName = "Chicken Biriyani";
  availableSides = [{display: 'None', value: ''},{display: 'Veg', value: ''},{display: 'Non-Veg', value: ''}]
  recipeService: RecipesService;
  constructor(recipeService: RecipesService) {
    this.recipeService = recipeService;
   }

  ngOnInit() {
  }
  onSubmitForm(submitItem){
    if(submitItem.invalid){
      return;
    }
    console.log(submitItem);
    this.recipeService.addRecipe(submitItem.value.name, submitItem.value.side);
  }
}
