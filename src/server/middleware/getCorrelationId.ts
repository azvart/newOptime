import {Request, Response, NextFunction} from 'express';



export async function getCorrelationId(req:any,res:Response, next:NextFunction){;
  res.header('x-app-id',"Optum Perks");
  res.header('x-correlation-id', `${req.correlationId()}`);
  req.body.correlation = req.correlationId();
  res.cookie("correlation", `${req.correlationId()}`);
  next();
}