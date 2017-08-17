import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class RecipesService {
  private recipes = [
    {name : 'Veg Biriyani', side: ''},
    {name : 'Chicken Biriyani', side: ''},
    {name : 'Mutton Biriyani', side: ''},
    {name : 'Mushroom Biriyani', side: ''},
    {name : 'Paneer Tikka', side: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService){
    this.logService = logService;
  }
  getRecipes(chosenSide){
    if (chosenSide === 'all') {
      return this.recipes.slice();
    }
    this.recipes.filter((item) => {
      return item.side === chosenSide;
    })
  }

  onSideSelect(itemInfo){
    const pos = this.recipes.findIndex((item) => {
      return item.name === itemInfo.name;
    })
    this.recipes[pos].side = itemInfo.side;
    this.logService.writeLog('Changed side of Recipe' + itemInfo.name + ', new Side: ' + itemInfo.side );
  }
  addRecipe(name, side){
    const pos = this.recipes.findIndex((item) => {
      return item.name === name;
    })
    if(pos !== -1){
      return;
    }
    const newRecipe = { name: name, side: side};
    this.recipes.push(newRecipe)
  }
}
