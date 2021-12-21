export enum ActionsType{
  ZIP = "ZIP",
  CLEAR = "CLEAR"
};

export interface SearchZipAction{
  type: typeof ActionsType.ZIP,
  payload: any
};

export interface ClearZipAction{
  type: typeof ActionsType.CLEAR,
  payload: any
}
export type SearchZipActionsType = SearchZipAction | ClearZipAction;