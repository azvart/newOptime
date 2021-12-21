export enum ActionsType{
  CURRENT = "CURRENT"
};

export interface CurrentMedAction{
  type: typeof ActionsType.CURRENT,
  payload: any
};

export type CurrentActionsType = CurrentMedAction;