import {Controller} from '../../../types/controller.types';
import {Router,Request,Response} from 'express';
import ModelMedication from '../models/medication.model';
import fs from 'fs';
import axios from 'axios';
class Medication implements Controller{
  public path ='/medication';
  public router = Router();
  constructor(){
    this.initializeRouter();
  }
  private initializeRouter(){
      this.router.post(`${this.path}/current`, this.getCurrentMedication);
      this.router.post(`${this.path}/search`, this.searchMedications);
      this.router.post(`${this.path}/top`, this.topMedication);
      this.router.get(`${this.path}/filldb`, this.fillDbMed);
      this.router.get(`${this.path}/group`,this.searchGroup);
      this.router.get(`${this.path}/medsave`, this.medSave);
  }
  private async medSave(req:any, res:Response){
    const token:any = await axios({
      method:"POST",
      url:"https://perks.optum.com/api/oauth/token",
    });
    const account:any = await axios({
      method:"POST",
      url:"https://api.perks.optum.com/api/optumperks/v1/account",
      headers:{
        authorization:`Bearer ${token.data.access_token}`,
        'x-correlation-id':`${req.correlationId()}`,
        'x-app-id':"Optum Perks"
      }
    });
    
    const result = await axios({
      method:"GET",
      url:`https://api.perks.optum.com/api/optumperks/v1/drugs/${req.body.name.replaceAll(" ", "-").toLowerCase()}`,
      headers:{
        authorization:`Bearer ${token.data.access_token}`,
        'x-app-id':"Optum Perks",
        "x-correlation-id":`${req.correlationId()}`,
        'x-account-id':`${account.data.id}`
      }
    });
    const data = await ModelMedication.saveMedication(result.data);
    if(!data){
      return res.status(400).json({message:"Error"});
    }
    return res.status(200).json(data);
  }
  private async searchGroup(req:Request,res:Response){
    try{
      const group:any = await ModelMedication.searchGroup(req.body.name);
      const unique = async (array:any, propertyName:any) => {
        return await array.filter((e:any,i:any) => array.findIndex((a:any) => a[propertyName] === e[propertyName]) === i);
      }
      const data = await unique(group, "label");
      return res.status(200).json(data);
    }catch(err){
      console.error(err);
    }
  }
  private async topMedication(req:Request,res:Response){

    try{
        // const medication:any = await ModelMedication.searchMed();
        // const unique = async (array:any,propertyName:any) => {
        //   return await array.filter((e:any,i:any) => array.findIndex((a:any) => a.label[propertyName] === e.label[propertyName]) === i);
        // }
        // const data = await unique(medication, "label");
        // return res.status(200).json(data);
        const medication:any = await ModelMedication.searchUniqueMed();
        return res.status(200).json(medication);
    }catch(err){
      console.error(err);
    }
    
  }
  private async fillDbMed(req:any,res:Response){
    const medication = fs.readFileSync('med.json','utf-8');
    const top = await JSON.parse(medication);
    const token:any = await axios({
      method: "POST",
    url: "https://perks.optum.com/api/oauth/token",
    })
    const account:any = await axios({
      method:"POST",
      url: "https://api.perks.optum.com/api/optumperks/v1/account",
      headers:{
        authorization:`Bearer ${token.data.access_token}`,
        'x-correlation-id':`${req.correlationId()}`,
        'x-app-id':"Optum Perks"
      }
    });
    const urls = top.map((item:any) => {
      return `https://api.perks.optum.com/api/optumperks/v1/drugs/${item.label.replaceAll(" ","-").toLowerCase()}`
    })
    const requests = await urls.map(async (item:any) => {
      const result =  await axios({
        method:"GET",
        url:item,
        headers:{
          authorization: `Bearer ${token.data.access_token}`,
          "x-app-id":"Optum Perks",
          "x-correlation-id":`${req.correlationId()}`,
          "x-account-id":`${account.data.id}`
        }
      });
      return result.data;
    });
    const data = await axios.all(requests);
    console.log(data);
    await ModelMedication.insertMany(data);
    return res.status(200);
  }




  private async getCurrentMedication(req:any,res:Response){
    const med:any = await ModelMedication.getCurrentPharm(req.body.name);
   if(med.length > 0){
      await med[0].variants.push({
      id: med[0].id,
      name: med[0].name,
      drugType: med[0].drugType,
      urlSlug: med[0].name
   })

    const manufacturer = med[0].settings.manufacturer.filter((value:any, index:any, self:any) => {
      return self.indexOf(value) === index;
    });
    const form = med[0].settings.form.filter((value:any, index:any, self:any) => {
      return self.indexOf(value) === index;
    });
    const data:any = med[0];
    const formattedData = Object.assign(data, {
      settings:{
        manufacturer: manufacturer,
        form: form
      }
    })
    return res.status(200).json(formattedData);
   }
  //  else{
  //   const result = await axios({
  //     url: `https://api.perks.optum.com/api/optumperks/v1/drugs/${req.body.name.replaceAll(" ", "-").toLowerCase()}`,
  //     method:'GET',
  //     headers:{
  //       authorization: req.body.headers.authorization,
  //       'x-account-id':req.body.headers['x-account-id'] ,
  //       'x-app-id':"Optum Perks",
  //       'x-correlation-id':req.correlationId(),
  //     },
  //   })
  //   await ModelMedication.saveMedication(result.data);
  //   const data:any = await ModelMedication.getCurrentPharm(req.body.name);
  //   await data[0].variants.push({
  //     id: data[0].id,
  //     name: data[0].name,
  //     drugType: data[0].drugType,
  //     urlSlug: data[0].name
  //   })
  //   return res.status(200).send(data);
  //  }
  }
  


  private async searchMedications(req:any, res:Response) {
    
    const result:any = await axios({
      url: `https://api.perks.optum.com/api/optumperks/v1/search?q=${req.body.name}&type=drug&limit=10`,
      method:"GET",
      headers:{
        authorization: req.body.headers.Authorization,
        'x-account-id':req.body.headers['x-account-id'] ,
        'x-app-id':"Optum Perks",
        'x-correlation-id':req.correlationId(),
        origin: 'https://perks.optum.com',
        referer: 'https://perks.optum.com/',
      }
    });
    return res.status(200).json(result.data);
  }
}



export default Medication;