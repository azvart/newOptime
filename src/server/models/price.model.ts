import mongoose, { Document, Schema, Model} from 'mongoose';
import {IPrice} from '../../../types/price.types';



interface IPriceDocument extends IPrice, Document{};
interface IPriceModel extends Model<IPriceDocument>{
  findPrice: (formId: string, location: string, quantity: string) => Promise<IPriceDocument>;
  
};



const PriceSchema: Schema = new Schema({
  couponId: {
    type: String,
  },
  isLowestPrice: {
    type: Boolean,
  },
  pbmId: {
    type: String,
  },
  price: {
    type: Object,
  },
  priceLevel: {
    type: String,
  },
  retailer: {
    type: Object,
  },
  formId: {
    type: String,
  },
  location: {
    type: String,
  },
  quantity: {
    type: String,
  },
  data: {
    type: Array,
  },
},{versionKey:false});



PriceSchema.statics.findPrice = async function(formId: string, quantity: string, location: string){
  // let price = await this.findOne({
  //   quantity: quantity,
  //   location: location,
  //   formId:formId,
  // }).lean()
  // let price = await this.aggregate([
  //   {
  //     $match:{
  //       $and:[
  //         {"formId":formId},
  //         {"quantity":quantity},
  //         {"location":location}
  //       ]
  //     }
  //   }
  // ])
  const price = await this.aggregate([
    {
      $match:{
        "location":`${location}`,
        "quantity":`${quantity}`,
        "formId":`${formId}`
      }
    },
    {
      $limit:1
    },
    {
      $unwind: "$data"
    },
    {
      $group:{
        _id:{
          id:"$data.id",
          pbmId:"$data.pbmId",
          price:"$data.price",
          retailer:"$data.retailer",
          isLowestPrice:"$data.isLowestPrice"
        }
      }
    },
    {
      $project:{
        "_id":0,
        "price":"$_id.price",
        "retailer":"$_id.retailer",
        "id":"$_id.id",
        "pbmId":"$_id.pbmId",
        "isLowestPrice":"$_id.isLowestPrice",
        "distance":""
      }
    }

  ]);
  return  price;
}


const Price = mongoose.model<IPriceDocument, IPriceModel>('prices',PriceSchema);

export default Price;