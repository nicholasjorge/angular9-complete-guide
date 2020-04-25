import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
