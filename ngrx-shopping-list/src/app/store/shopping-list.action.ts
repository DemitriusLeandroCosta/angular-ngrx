import { createAction, props } from '@ngrx/store';

import { IShoppingListItem } from './shopping-list.state';

export const loadShoppingList = createAction('[Shopping List] load Shopping List');

export const loadShoppingListSucess = createAction('[Shopping List] load Shopping List Sucess',
  props<{payLoad:IShoppingListItem[]}>()
);

export const loadShoppingLisError = createAction('[Shopping List] load Shopping List Error');
