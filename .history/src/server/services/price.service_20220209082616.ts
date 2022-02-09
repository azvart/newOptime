import axios, {AxiosResponse} from 'axios';
import Price from '../models/price.model';
import { Settings } from '../utils/priceSettings';

class PriceService{

    public price = Price;

    getPrice = async () => {
        
    }

}


export default PriceService;