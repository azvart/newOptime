import { Controller } from "../../../types/controller.types";
import {Request, Response, Router} from 'express';
import Price from '../models/price.model';
import axios, {AxiosResponse} from 'axios';




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
    
    const { name } = req.body;
    const replacingName = name.replaceAll(" ", "+");
    const prices:any = await Price.findPrice(req.body.formulationId, req.body.quantity, req.body.searchLocation);
    console.log(prices);
    if(!prices || prices.length <= 1){
      const optumPrice:AxiosResponse<any> = await axios({
        method:"GET",
        url:`https://api.perks.optum.com/api/optumperks/v1/prices?quantity=${req.body.quantity}&formulationId=${req.body.formulationId}&b-g=${req.body.type}&dn=${replacingName}&gpi14=${req.body.gpi14}&ubi=${req.body.ubi}&searchLocation=${req.body.searchLocation}&searchLocationZipCode=${req.body.searchLocationZipCode}`,
        headers:{
          authorization: req.body.headers.authorization,
          'x-account-id':req.body.headers['x-account-id'] ,
          "x-correlation-id": req.correlationId(),
          'x-app-id': "Optum Perks"
        }
      });
      await new Price({
        formId:req.body.formulationId,
        quantity: req.body.quantity,
        location:req.body.searchLocation,
        data: optumPrice.data.data
      }).save();
      const priceFind = await Price.findPrice(req.body.formulationId, req.body.quantity, req.body.searchLocation);
      return res.status(200).json(priceFind);
    }
    return res.status(200).json(prices);
  }

}



export default  Prices;