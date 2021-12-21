export enum ActionsType{
  SEARCH = "SEARCH",
}

export interface SearchMedAction{
  type: typeof ActionsType.SEARCH,
  payload:any
};


export type SearchActionsType = SearchMedAction;