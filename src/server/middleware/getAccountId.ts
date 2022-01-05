import axios from 'axios';
import {Request, Response, NextFunction} from 'express';


export async function getAccountId(req:Request, res:Response, next:NextFunction){
  const result:any = await axios({
    method:"POST",
    url: "https://api.perks.optum.com/api/optumperks/v1/account",
    headers:{
      Authorization: `${res.getHeaders().authorization}`,
      'x-app-id':`${res.getHeaders()['x-app-id']}`,
      'x-correlation-id':`${res.getHeaders()['x-correlation-id']}`,
    }
  });
  // axios.defaults.headers.common['x-account-id'] = `${result.data.id}`;
  res.header('x-account-id', result.data.id);
  req.body.account = result.data.id;
  res.cookie("account", result.data.id );
  next();
}