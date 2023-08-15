import { createAction, props } from "@ngrx/store";

export const loadShoppingList = createAction('[Shopping List] load Shopping List');

export const loadShoppingListSucess = createAction('[Shopping List] load Shopping List Sucess',
  props<{payLoad:any}>()
);

export const loadShoppingLisError = createAction('[Shopping List] load Shopping List Error');
