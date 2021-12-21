export enum ActionsType {
  TOP = "TOP",
  GROUP = "GROUP"
}

export interface TopMedAction{
  type: typeof ActionsType.TOP,
  payload: any
}


export interface SearchGroupAction{
  type: typeof ActionsType.GROUP,
  payload:any
}

export type TopMedActionsType = TopMedAction | SearchGroupAction;