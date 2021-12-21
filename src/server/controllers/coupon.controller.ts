import { Controller } from "../../../types/controller.types";
import {Router, Request, Response} from 'express';
import axios from 'axios';




class Coupon implements Controller{
  public path ='/coupon';
  public router = Router();
  constructor(){
    this.initializeRouter();
  }

  private initializeRouter(){
    this.router.post(`${this.path}/get`, this.getCoupon);
  }

  private async getCoupon(req:any, res:Response){
    const url = await axios({
      url: "https://api.perks.optum.com/api/optumperks/v1/coupons",
      method: "POST",
      data: {
        ...req.body.data,
        trackingInfo:{visitorId: req.body.headers['x-account-id']}
      },
      headers: {
        authorization: req.body.headers.authorization,
        'x-account-id': req.body.headers['x-account-id'],
        'x-app-id': "Optum Perks",
        'x-correlation-id': req.correlationId(),
      }
    });

    return res.status(200).json(url.data);
  }
}



export default Coupon;