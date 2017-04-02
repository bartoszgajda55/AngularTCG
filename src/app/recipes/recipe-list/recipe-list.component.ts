import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/push_item/public/recipe_images/recipe-image-legacy-id--1090476_11.jpg?itok=PMFhUnws'),
    new Recipe('A Test 2 Recipe', 'This is a test 2', 'https://www.bbcgoodfood.com/sites/default/files/styles/push_item/public/recipe_images/recipe-image-legacy-id--1090476_11.jpg?itok=PMFhUnws'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
