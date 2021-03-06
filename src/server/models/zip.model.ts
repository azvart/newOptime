import mongoose, {Document, Schema, Model} from 'mongoose';
import {IZip} from '../../../types/zip.types';

interface ZipDocument extends IZip, Document{};
interface ZipModel extends Model<ZipDocument>{
  findZip: (zip:string) => Promise<ZipDocument>;
};



const ZipShema:Schema = new Schema(  {
  zip: {
    type: String,
  },
  lat: {
    type: String,
  },
  lng: {
    type: String,
  },
  city: {
    type: String,
  },
  state_id: {
    type: String,
  },
  state_name: {
    type: String,
  },
  zcta: {
    type: String,
  },
  population: {
    type: String,
  },
  density: {
    type: String,
  },
  county_fips: {
    type: String,
  },
  county_name: {
    type: String,
  },
  county_weigths: {
    type: Object,
  },
  county_names_all: {
    type: String,
  },
  county_fips_all: {
    type: String,
  },
  imprecise: {
    type: String,
  },
  military: {
    type: String,
  },
  timezone: {
    type: String,
  },
},{versionKey:false, toJSON: {virtuals: true}});

ZipShema.statics.findZip = async function(zip:string){
  let code = await this.aggregate([
    {
      $match: {
        $or: [
          { zip: { $regex: `.*${zip}.*`, $options: "i" } },
          { city: { $regex: `.*${zip}.*`, $options: "i" } },
        ],
      },
    },
    {
      $project: {
        zip: "$zip",
        label: { $concat: ["$zip", " ", "$city"] },
        location: { $concat: ["$lat", ",", "$lng"] },
      },
    },
  ]);

  return code;
}


const ModelZip = mongoose.model<ZipDocument, ZipModel>("zip", ZipShema);


export default ModelZip;