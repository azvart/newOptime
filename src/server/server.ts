import 'dotenv/config';
// import { Validate } from './utils/validate';
import App from './app/index';
import Medication from './controllers/medication.controller';
import Zip from './controllers/zip.controllers';
import Prices from './controllers/price.controller';
import Coupon from './controllers/coupon.controller';
// Validate();
const server = new App([
  new Medication(), 
  new Zip(), 
  new Prices(), 
  new Coupon()
]);

server.listen();


