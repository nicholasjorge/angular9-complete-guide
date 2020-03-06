import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Input()
  recipes: Recipe[] = [
    new Recipe(
      "Test recipe 1",
      "test desc 1",
      "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg"
    ),
    new Recipe(
      "Test recipe 2",
      "test desc 2",
      "https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1000,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg"
    )
  ];

  @Output()
  recipeEM = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelectedRecipe(recipeEl: Recipe) {
    this.recipeEM.emit(recipeEl);
  }
}
