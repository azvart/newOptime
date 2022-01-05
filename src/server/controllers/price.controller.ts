import { Controller } from "../../../types/controller.types";
import {Request, Response, Router} from 'express';
import Price from '../models/price.model';
import axios, {AxiosResponse} from 'axios';
import {getDistance, convertDistance} from 'geolib';
import {Settings} from '../utils/priceSettings';

class Prices implements Controller{
  public path = '/price';
  public router = Router();

  constructor(){
    this.initializeRoutes();
  }

  private initializeRoutes(){
      this.router.post(`${this.path}/getting`, this.getPrice);
  }

  private async getPrice(req:any, res:Response){
    const token = `Bearer ${req.cookies.token}`
    const account = req.cookies.account;
    const { name } = req.body;
    const replacingName = name.replaceAll(" ", "+");
    const prices:any = await Price.findPrice(req.body.formulationId, req.body.quantity, req.body.searchLocation);
    const priceFormated = await Settings(prices, req.body.searchLocation);

    if(!prices || prices.length <= 1){  
      const optumPrice:AxiosResponse<any> = await axios({
        method:"GET",
        url:`https://api.perks.optum.com/api/optumperks/v1/prices`,
        headers:{
          "Content-Type":"application/json",
          'Accept':"application/json",
          authorization: token,
          'x-account-id':account,
          "x-correlation-id": req.correlationId(),
          'x-app-id': "Optum Perks",
          
        },
        params:{
          quantity:req.body.quantity,
          formulationId:req.body.formulationId,
          'b-g':req.body.type,
          dn:replacingName,
          gpi14:req.body.gpi14,
          ubi:req.body.ubi,
          searchLocation:req.body.searchLocation,
          searchLocationZipCode:req.body.searchLocationZipCode
        }
      });
      await new Price({
        formId:req.body.formulationId,
        quantity: req.body.quantity,
        location:req.body.searchLocation,
        data: optumPrice.data.data
      }).save();
      const priceFind = await Price.findPrice(req.body.formulationId, req.body.quantity, req.body.searchLocation);
      const formatted = await Settings(priceFind, req.body.searchLocation);
      return res.status(200).json(formatted);
    }
    return res.status(200).json(priceFormated);
  }

}



export default  Prices;