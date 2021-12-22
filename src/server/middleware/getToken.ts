import axios from 'axios';
import {Request, Response, NextFunction} from 'express';



export async function getToken(req:Request, res:Response, next:NextFunction){
  const result:any = await axios({
    method: "POST",
    url: "https://perks.optum.com/api/oauth/token",
  })
  res.header("Authorization", `Bearer ${result.data.access_token}`);  
  req.body.token = `Bearer ${result.data.access_token}`;
  res.cookie("token", `${result.data.access_token}`);
  next();
}