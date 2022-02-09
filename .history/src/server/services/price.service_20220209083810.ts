import axios, {AxiosResponse} from 'axios';
import Price from '../models/price.model';
import { Settings } from '../utils/priceSettings';
import type { IRequestPriceParamsService } from '../../../types/price.types';
class PriceService{

    public price = Price;

    getPrice = async () => {
        

    }   

    getRequestPrice = async (params:IRequestPriceParamsService, token: string, accountId:string, correlationId: string) => {

        const { data }:AxiosResponse = await axios({
            method:"GET",
            url:`https://api.perks.optum.com/api/optumperks/v1/prices`,
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                authorization: token,
                'x-account-id': accountId,
                'x-app-id':"Optum Perks"
            }
        })

    }

}


export default PriceService;