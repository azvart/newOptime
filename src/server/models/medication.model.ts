import mongoose, {Document, Schema, Model} from 'mongoose';

interface MedicationDocument extends Document{};
interface MedicationModel extends Model<MedicationDocument>{
  getCurrentPharm: (name:string) => Promise<Document>;
  saveMedication: (data:any) => Promise<Document>;
  searchMed: () => Promise<Document>;
  searchGroup: (name:string) => Promise<Document>;
};

const MedicationSchema:Schema = new Schema({
    id:{
      type: String,
    },
    name:{
      type: String
    },
    descriptionHtml:{
      type: String,
    },
    descriptionText:{
      type: String
    },
    drugType:{
      type:String,
    },
    drugStatus:{
      type: Object,
    },
    drugMessages:{
      type: Array,
    },
    isOtcDrug:{
      type: Boolean,
    },
    variants:{
      type: Array,
    },
    formulations:{
      type:Array,
    },
    defaultSettings:{
      type:Object,
    },
    info:{
      type: Array,
    },
    theraoeuticClas_:{
      type:Array,
    },
    pharmacologicCl_:{
      type:Array,
    },
    urlSlug:{
      type:String,
    },
    medicare:{
      type: Object,
    },
    legalDisclamer:{
      type: String,
    },
    sideEffects:{
      type:Object,
    }
},{versionKey:false});

MedicationSchema.statics.getCurrentPharm = async function(name:string){
   const med: any = await this.aggregate([
    {
      $match:{
        $or:[
          {"name":{$regex:`.*${name}.*`,$options:"i"}},
          {"variants.name":{$regex:`.*${name}.*`,$options:"i"}},
          {"name":`${name}`}
        ]
      }
    },
     {
       $project:{
         "name":1,
         "variants":1,
         "formulations":1,
         "drugType":1,
         "id":1,
         "defaultSettings":1,
         "descriptionHtml":1,
         "descriptionText":1,
       },
     },
   ]);
   return med;
}

MedicationSchema.statics.saveMedication = async function(data:any){
  return new this(data).save();
}
MedicationSchema.statics.searchGroup = async function(name:string){
  const group = await this.aggregate([
    {
      $match:{
        "formulations.name":{
          $regex:`.*${name}.*`,$options:"i"
        }
      }
    },
    {
      $project:{
        "label":"$formulations.name",
        
      }
    },
    {
      $facet:{
        "data":[{$unwind:"$label"}]
      }
    }
  ]);
  return group[0].data;
}
MedicationSchema.statics.searchMed = async function(){
  const data:any = await this.aggregate([
    {
      $match:{
        $or:[
          {"formulations.name":{$regex:".*.*",$options:"i"}},
          {"variants.name":{$regex:".*.*",$options:"i"}}
        ]
      }
    },
    {
      $project:{
        "label":"$formulations",
        "group":"$name"
      }
    },
    {
      $project:{
      group:"$group",
      label:{
        $map:{
          input:"$label",
          as:"item",
          in:{
            label:"$$item.name",
            type:"$$item.drugType"
          }
        }
      }
    }
    },
    {
      $facet:{
        "data":[{$unwind:"$label"}]
      }
    }
  ]);


  return data[0].data;
}

const ModelMedication = mongoose.model<MedicationDocument, MedicationModel>("medication",MedicationSchema);

export default ModelMedication;