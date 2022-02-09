import axios, {AxiosResponse} from 'axios';
import Price from '../models/price.model';
import { Settings } from '../utils/priceSettings';
import type { IRequestPriceParamsService } from '../../../types/price.types';
class PriceService{

    public price = Price;

    getPrice = async () => {
        

    }   

    getRequestPrice = async (params:IRequestPriceParamsService, token: string, accountId:string, correlationId: string) => {
        try{
        const { data }:AxiosResponse<any> = await axios({
            method:"GET",
            url:`https://api.perks.optum.com/api/optumperks/v1/prices`,
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                authorization: token,
                'x-account-id': accountId,
                'x-app-id':"Optum Perks"
            },
            params: params
        });
        await new this.price({
            formId: params.formulationId,
            quantity: params.quantity,
            location: params.searchLocation,
            data: data.data
        }).save();
        
        }catch(e){
            return `Something wrong: ${e.message}`
        }

    }

    settingsPrice = async (data:any, locations: string) => {

        return await Settings(data, locations);

    }

}


export default PriceService;