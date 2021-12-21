
export interface Medication{
  id?:string,
  name:string
  descriptionHtml:string,
  descriptionText:string,
  drugType:string,
  drugStatus:DrugStatus,
  drugMessages:[DrugMessages],
  isOtcDrug:boolean,
  variants:[MedicationVariants],
  formulations:[MedicationFormulations],
  defaultSettings:MedicationDefaultSettings,
  info:[MedicationInfo],
  theraoeuticClas_:[any],
  pharmacologicCl_:[any],
  urlSlug:string,
  medicare:MedicationMedicare,
  legalDisclamer:string,
  sideEffects:MedicationSideEffects
}

interface DrugStatus{
  type:string,
}
interface DrugMessages{}
interface MedicationVariants{
  id:string,
  urlSlug:string,
  name:string,
  drugType:string,
}
interface MedicationFormulations{
  id:string,
  drugId:string,
  drugUrlSlug:string,
  gpi14:string,
  drugType:string,
  form:string,
  pluralForm:string,
  dosage:[MedicationFormulationsDosage],
  commonQuantiti_:[MedicationFormulationsQuantiti]
  reasonsCodes:[string]
}
interface MedicationFormulationsDosage{
  value:number,
  unit:string,
  display:string,
}
interface MedicationFormulationsQuantiti{
  value:number,
  display:string,
  ndc:string,
}
interface MedicationDefaultSettings{
  formulationId:string,
  quantity:number,
  reasonCodes:[string]
}
interface MedicationInfo{
  id:string,
  html:string,
  title:string
}
interface MedicationMedicare{
  isCovered:boolean,
  explanation:string,
}
interface MedicationSideEffects{
  overview:string,
  commonSideEffec_:string,
  commonSideEffec:[string],
  rareSideEffects_:string,
  rareSideEffects:[string],
}