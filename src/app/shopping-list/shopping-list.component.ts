import { Component, OnInit, Input } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("tomatoes", 2)
  ];

  @Input()
  ingredient: Ingredient;

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient);
  }
}
