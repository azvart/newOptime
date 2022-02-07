import { Controller } from "../../../types/controller.types";
import {Router, Request, Response} from 'express';
import ModelZip from '../models/zip.model';
import ZipService from '../services/zip.service';
class Zip implements Controller{
  public path = '/zip';
  public router = Router();
  public service = new ZipService();
  constructor(){
    this.initilizeRouter();
  }

  private initilizeRouter(){
      this.router.post(`${this.path}/searchzip`, this.currentZip);
  }

  //  async currentZip(req:Request,res:Response){
  //   const currentZip = await ModelZip.findZip(req.body.zip);
  //   return res.status(200).send(currentZip);
  // }

  currentZip = async (req:Request, res:Response) => {
    try{
    const data = this.service.getCurrentZip(req.body.zip);
    return res.status(200).send(data);
    }catch(e){
      return res.status(400).json({message: e.message, status: false});
    }
  }
}


export default Zip;