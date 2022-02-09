import axios, {AxiosResponse} from 'axios';
import Price from '../models/price.model';
import { Settings } from '../utils/priceSettings';
import type { IRequestPriceParamsService } from '../../../types/price.types';
class PriceService{

    public price = Price;

    getPrice = async (params:IRequestPriceParamsService) => {
        
    }

    getRequestPrice = async () => {

    }

}


export default PriceService;