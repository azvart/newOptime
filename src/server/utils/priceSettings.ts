import {getDistance, convertDistance} from 'geolib';



export async function Settings(array:any, defaultDistance:string){
  const lat = defaultDistance.split(",")[0];
  const lng = defaultDistance.split(",")[1];
  const uniq = Array.from(array.reduce((m:any, t:any) => m.set(t.retailer.name, t), new Map()) .values())
  .filter((item:any) => item.retailer.id !== 'store')
  .map((e:any) => {
    if(e.price.display.split(".")[1].length < 2){
      return {...e, price:{...e.price, display:e.price.display + "0"}}
    }
    return e;
  }).map((e:any) => {

    return {...e, distance:`${convertDistance(getDistance({
          lat: lat,
      lng: lng
    },
    {
      lat: String(e.retailer.location.coordinates.latitude),
      lng: String(e.retailer.location.coordinates.longitude)
    }
    ), 'mi').toFixed(2)} mi`}

  }).sort((a:any, b:any) => {
    if(parseFloat(a.price.amount) < parseFloat(b.price.amount)){
      return -1;
    }else if(parseFloat(a.price.amount) > parseFloat(b.price.amount)){
      return 1;
    }else{
      return a.distance.split(" ")[0] - b.distance.split(" ")[0];
    }
  })
  
  return uniq;
}