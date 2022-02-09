import express, {Request, Response, NextFunction} from 'express';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';
import correlator from 'express-correlation-id';
import {logger} from '../middleware/logger';
import {Controller} from '../../../types/controller.types';
import {getToken} from '../middleware/getToken';
import {getCorrelationId} from '../middleware/getCorrelationId';
import {getAccountId} from '../middleware/getAccountId';
import {renderApp} from './renderApp';
import {renderHtml} from './renderHtml';
import store from '../../core/store/store';
import fs from 'fs';
import {mongoLocal} from '../../../types/env';
class App{
  private app:express.Application;
  constructor(controllers:Controller[]){
    this.app = express();
    this.DB();
    this.middleware();
    this.controller(controllers);
    this.main();
  }

  private middleware(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(cookieParser());
    // this.app.use(helmet());
    this.app.use(express.static(__dirname));
    this.app.use(logger);
    this.app.use(correlator());
    // this.app.use('/search',
    // getToken, getCorrelationId, getAccountId
    // );
  }
    private main() {
      this.app.get("*", async (req:Request,res:Response) => {
        const content = renderApp(store,{},req.url);
        const manifest = fs.readFileSync(
          path.join(__dirname, "asset-manifest.json"),
          "utf-8"
        );
        const assets = JSON.parse(manifest); 
        
          return res.send(renderHtml({content, styles:[assets["main.css"]],scripts:["static/client.js"] }))
      })
    }
  private controller(controllers:Controller[]){
        controllers.forEach((controller) => {
          this.app.use('/api', controller.router);
        })
  }
  private DB(){
    mongoose.connect(mongoLocal).then(() => {
      console.log(`DB connected success ${mongoLocal}`)
    })
  }
  public listen(){
    this.app.listen(5000, () => {
      console.log(`Server running on port: 5000`)
    })
  }
}

export default App;