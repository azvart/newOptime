import ModelZip from '../models/zip.model';



class ZipService {

  public model = ModelZip;

  async getCurrentZip(zip:string){
      const current = await this.model.findZip(zip);

      return current;
  } 


}


export default ZipService;