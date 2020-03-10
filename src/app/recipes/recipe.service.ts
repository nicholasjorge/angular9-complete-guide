import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: "root" })
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Turkey Meatloaf",
      "Unbelievably Moist Turkey Meatloaf",
      "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg",
      [new Ingredient("onion", 1), new Ingredient("egg", 2)]
    ),
    new Recipe(
      "Gojuchang Chicken",
      "Slow-Roast Gochujang Chicken",
      "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1000,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg",
      [new Ingredient("gochujang", 5), new Ingredient("onion", 2)]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
