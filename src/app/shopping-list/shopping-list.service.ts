import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({ providedIn: "root" })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomatoes", 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
