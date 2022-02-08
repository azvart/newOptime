import React, {
  FC,
  useEffect,
  useState,
  useMemo,
  Suspense,
  useCallback,
} from "react";

import { useLocation, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, useStore, shallowEqual } from "react-redux";
import { useCookies } from "react-cookie";
import { Loader, PlugSvg, RowItem, TileItem } from "../../components";
import {
  HeaderLogoImage,
  LocationIconSvg,
  SearchIconSvg,
} from "../../assets/images";
import { InputField, Dropdown, ItemsControl, Footer } from "../../components";
import InputAutoSuggest from '../../components/InputAutoSuggest';
import { ITEMS_CONTROL_MODE } from "../../components/ItemsControl";
import CurrentMed from "../../store/currentMed/action";
import TopMed from '../../store/topMed/action';
import SearchZip from '../../store/SearchZip/action';
import { ClearZip } from "../../store/SearchZip/action";
import getPrice from '../../store/Price/actions';
import { OptimeRootReducer } from "core/store/rootReducer";
import '../../assets/pages/result.scss';

export const ResultPage: FC<any> = () => {
  const [error, setError] = useState(false);
  const [errorZip, setErrorZip] = useState(false);
  const [searchMed, setSearchMed] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [cookies, setCookies] = useCookies();
  const currentMedication = useSelector((state:OptimeRootReducer) => state.currentReducer, shallowEqual);
  const [description,setDescription] = useState("");
  const topMed = useSelector((state:any) => state.topMedReducer.top);
  const zip = useSelector((state:any) => state.zipReducer.sort((a:any, b:any) => {return (a.label < b.label)? -1 :(a.label > b.label) ? 1 : 0 }));
  const { priceReducer } = useSelector((state:OptimeRootReducer) => state);
  const history = useHistory();
  const location:any = useLocation();
  const [open, setOpen] = useState(false);
  const mockSorting = ["LOWEST", "HIGHEST"];
  const [itemsMode, setItemsMode] = useState(ITEMS_CONTROL_MODE.TILES);
  const [loading, setLoading] = useState(false);
  const [chosen, setChosen]: any = useState({
    Manufacturer: "no items",
    Form: "no items",
    Dosage: "no items",
    Quantity: "no items",
  });
  const dispatch = useDispatch();
  const [searchBool, setSearchBool] = useState(false);
  const [zipBool, setZipBool] = useState(false);
  const [zipObj, setZipObj] = useState([]);
  useEffect(() => {
    if (!location.state) {  
      return history.push("/search");
    }
  }, [location]);
  useEffect(() => {
    if(searchZip){
      dispatch(SearchZip(searchZip));
    }
    
    return () => {dispatch(ClearZip())}
  }, [searchZip]);
  useEffect(() => {
    dispatch(TopMed({authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}));
  }, [])
  useEffect(() => {
    if(location.state.name.length > 0){
      dispatch(CurrentMed(location.state.name,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}))
    }
  }, [location]);

  useEffect(() => {
      if(currentMedication.name){
          const {name, defaultSettings, brandSettings, comparing} = currentMedication;
          const defaults = brandSettings.name.toLowerCase() === location.state.name.toLowerCase() ? brandSettings : comparing[0];
          if(defaults){
                    setChosen({
                      Manufacturer:`${defaults.name} (${defaults.drugType})`, 
                      Form: defaults.form, 
                      Dosage: defaults.dosage.display, 
                      Quantity: defaults.commonQuantities.find(({value}:any) => value === defaultSettings.quantity).display
                    })       
          }
      }
  }, [currentMedication]);
  

  const SubmitActionValue = () => {
    const escapedRegexCharacters =(str:any) => {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const escaped = escapedRegexCharacters(searchMed.trim());
    const regex = new RegExp('^' + escaped, 'i');
    if(searchMed.length > 0){
    const searchSubmit = topMed.map(({label}:any) => {
      return {
        label: label.filter(({label}:any) => regex.test(label))
      }
    })
    .filter(({label}:any) => label.length > 0)
    if(searchSubmit.length === 0){
      setError(true)
      return;
    }
    const sorting = searchSubmit.map(({label}:any) => label).flat()
    .sort((a:any,b:any) => {
      return (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0;
    }).map((e:any) => {
      return {
        label:[{label: e.label, type: e.type}]
      }
    })[0].label[0].label; 
    
    setSearchMed(sorting);
    setSearchBool(true);
    return;
  }
}




  const sortedFunc: any = () => {
    if (currentMedication.name && chosen) {
      const {formulations, settings} = currentMedication;
      const manufacturer = settings.manufacturer;
      const setting = formulations.reduce((acc:any, next:any, index:any) => {
        if(chosen.Manufacturer.split(" ").slice(0, -1).join(" ") === next.name){
          acc.form.push(next.form);
        }
        if(chosen.Manufacturer.split(" ").slice(0, -1).join(" ") === next.name && next.form === chosen.Form){
          acc.dosage.push(next.dosage.display);
          
        }
        if(next.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ") && chosen.Dosage === next.dosage.display && next.form === chosen.Form){
          
          acc.quantity.push(...next.commonQuantities);
          acc.quantity = acc.quantity.map(({display}:any) => display);
        }
        acc.form = [...new Set(acc.form)];
        return acc;
      },{
        manufacturer: manufacturer,
        form:[],
        dosage:[],
        quantity:[]
      })
      return {
        manufacturer: setting.manufacturer,
        form: setting.form,
        dosage: setting.dosage,
        quantity: setting.quantity
      };
    }
  };



  const priceFunc = () => {
    if (currentMedication.name) {
      const {formulations} = currentMedication;
      // const formulationsIds = formulations.reduce((arr:any, set:any) => {
      //   if(set.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ") && set.form === chosen.Form && set.dosage.display === chosen.Dosage ){
      //       arr.formulationId = set.ndc;
      //       arr.quantity = set.commonQuantities.find(({display}:any) => display === chosen.Quantity).value;
      //   }
      //   return arr;
      // },{});
                  const formulationId = formulations
        .filter((e: any) => {
          return (
            e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
          );
        })
        .filter((e: any) => {
          return e.form === chosen.Form;
        })
        .filter((e: any) => {
          return e.dosage.display === chosen.Dosage;
        })
        .map((e: any) => {
          return e.commonQuantities;
        })
        .flat()
        .filter((e: any) => {
          return e.display === chosen.Quantity;
        })
        .map((e: any) => {
          return e.ndc;
        });
      const value = formulations
        .filter((e: any) => {
          return (
            e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
          );
        })
        .filter((e: any) => {
          return e.form === chosen.Form;
        })
        .filter((e: any) => {
          return e.dosage.display === chosen.Dosage;
        })
        .map((e: any) => {
          return e.commonQuantities;
        })
        .flat()
        .filter((e: any) => {
          return e.display === chosen.Quantity;
        })
        .map((e: any) => {
          return e.value;
        });

        const info = formulations
        .filter((e: any) => {
          return (
            e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
          )
        }).filter((e: any) => {
          return e.form === chosen.Form;
        })
        .filter((e: any) => {
          return e.dosage.display === chosen.Dosage;
        })[0]

      return {type:info, formulationId:formulationId,quantity:value};
    }
  };

  const requestPrice:any = () => {
    if(priceSettings){
      dispatch( getPrice(
        priceSettings.quantity, 
        priceSettings.formulationId, 
        priceSettings.type.drugType, 
        priceSettings.type.name, 
        priceSettings.type.gpi14, 
        false,
        location.state.location[0].location,
        location.state.location[0].zip,
        ));
      }
  }

  const sorted = useMemo(() => {
    setLoading(true);
    return sortedFunc();
 }, [
   chosen.Manufacturer,
   chosen.Form,
   chosen.Dosage,
   chosen.Quantity
 ]);
  const priceSettings = useMemo(() => {
    return priceFunc();
  },[chosen.Manufacturer, chosen.Form, chosen.Dosage, sorted]);

  useEffect(() => {
    requestPrice();
   
  },[priceSettings, sorted]);


  useEffect(() => {
    if(searchMed.length > 0){
      setError(false);
    }
  },[searchMed]);
  useEffect(() => {
    if(searchZip.length > 0){
      setErrorZip(false);
    }
  },[searchZip]);

  useEffect(() => {
    const hanldeClick = (event:any) => {
      const { key } = event;
      if(key === 'Enter' && searchMed.length > 0 ){
          SubmitActionValue();
      }
    }
    document.addEventListener('keyup', hanldeClick);
    return () => {
      document.removeEventListener('keyup', hanldeClick);
    }
  },[searchMed, topMed]);

  useEffect(() => {
    if(zip.length === 1){
      setErrorZip(false);
      setZipBool(true); 
    }
  },[zip, searchZip]);
  
  useEffect(() => {
    if(searchBool && !zipBool){
      const timer = setTimeout(() => {
        history.push({
          state:{
            ...location.state,
            name: searchMed,
          }
        }) 
      },500)
       return () => {
         clearTimeout(timer)
       }
    }
    if(zipBool && !searchBool){
      const timer = setTimeout(() => {
        history.push({
          state:{
            ...location.state,
            location: zip
          }
        })
      }, 200)
     return () => {
       clearTimeout(timer);
     }
    }
    if(searchBool && zipBool){
      const timer = setTimeout(() => {
        history.push({
          state:{
            name:searchMed,
            location: zip
          }
        })
      }, 700)
     return () => {
       clearTimeout(timer);
     }
    }
  },[searchBool, zipBool, zip]);
  return ( 
    <>
      <div className="result-page">
        <div className="result-page__header">
          <div className="result-page__row">
            <Link to="/">
              <img src={HeaderLogoImage} alt="" />
            </Link>
            <div className="input_search_error">
              <InputAutoSuggest 
                  value={searchMed}
                  setValue={setSearchMed}
                  autocomplete={topMed}
                  iconUrl={SearchIconSvg}
                  placeholder="Type your drug name"
                  haveSubmit
                  buttonText="Search"
                  onSubmit={SubmitActionValue}
                  error={error}
              />
              {error ? (
                <div className="error_message">
                  Please choose correct medication
                </div>
              ) : (
                <div className="null"></div>
              )}
            </div>
          </div>
          <div className="result-page__row">
            {open && (
              <div className="input_search_error fild_animation">
                <InputField
                  value={searchZip}
                  iconUrl={LocationIconSvg}
                  onChange={setSearchZip}
                  placeholder="ZIP (enter at least 3 characters)"
                  classes="result-page__header-input"
                  autocompleteClasses="result-page__autocomplete"
                  // onSubmit={SubmitActionZip}
                  autocomplete={zip}
                  setError={setErrorZip}
                  setBool={setZipBool}
                  haveSubmit
                  buttonText="Search"
                  errorHandle={errorZip}
                  error="Incorrect ZIP code"
                />
                {errorZip  ? (
                  <div className="error_message">
                    Please choose correct Zip code
                  </div>
                ) : (
                  <div className="null"></div>
                )}
              </div>
             )}
            <PlugSvg
              url={LocationIconSvg}
              classes="result-page__location-icon"
              title="location"
            />

            {location.state && (<p
              className="result-page__location-text"
              onClick={() => setOpen(!open)}
            >
              {location.state.location[0].label}
            </p>)}
          </div>
        </div>

        <div className="result-page__content">
          <div className='result-page__description-title'>
            {location.state && (<h1 className="title">{location.state.name}</h1>)}
            {description && (<p className="description">{description}</p>)}
          </div>
          <div className="result-page__separator--green" />
            
          

          {sorted && chosen && (
            <div className="result-page__dropdowns">
              <Dropdown
                label="Manufacturer"
                items={sorted.manufacturer}
                chosen={chosen.Manufacturer}
                setChosen={(e: any) =>
                  setChosen({
                    ...chosen,
                    Manufacturer: e,
                  })
                }
              />
              <Dropdown
                label="Form"
                items={sorted.form}
                chosen={chosen.Form}
                setChosen={(e: any) =>
                  setChosen({
                    ...chosen,
                    Form: e,
                  })
                }
              />
              <Dropdown
                label="Dosage"
                items={sorted.dosage}
                chosen={chosen.Dosage}
                setChosen={(e: any) => setChosen({ ...chosen, Dosage: e })}
              />
              <Dropdown
                label="Quantity"
                items={sorted.quantity}
                chosen={chosen.Quantity}
                setChosen={(e: any) => setChosen({ ...chosen, Quantity: e })}
              />
            </div>
          )}
          <div className="result-page__items-control">
            <ItemsControl
              sortingItems={mockSorting}
              mode={itemsMode}
              action={setItemsMode}
            />
          </div>
          <div className="result-page__separator--grey" />
          {itemsMode === ITEMS_CONTROL_MODE.TILES && (
          <div className="result-page__tiles-area">
            <div className="result-page__tiles-wrapper">
                
             
             {priceReducer.data && priceReducer.load === 'idle'  ? priceReducer.data.map((item:any, index:any) => (
                <TileItem
                partnerId={null}
                isOtcDrug={false}
                highPriceAmount={null}
                priceCurrency={"USD"}
                retailerName={item.retailer.name}
                retailerId={item.retailer.id}
                retailerLogo={item.retailer.logo}
                drugName={chosen.Manufacturer.split(" ")[0]}
                dosageDisplay={chosen.Dosage}
                pbmId={item.pbmId}
                formulationId={priceSettings?.formulationId}
                ndc={priceSettings?.formulationId}
                key={item.retailer.name}
                locationId={item.retailer.location.id}
                locationPhoneNumber={item.retailer.location.phoneNumber}
                lowPriceAmount={item.price.amount}
                quantityDisplay={chosen.Quantity}
                drugUrlSlug={chosen.Manufacturer.split(
                  " "
                )[0].toLowerCase()}
                drugId={currentMedication.id}
                name={item.retailer.name}
                price={item.price.display}
                label=" Optum Perks"
                index={index}
                onClick={() => {}}
                distance={`${item.distance}`}
              />
             )) : (<Loader />)}
                
            </div>
          </div>
          )}

          {itemsMode === ITEMS_CONTROL_MODE.ROWS && (
            <div className="result-page__rows-wrapper">
                { priceReducer.data && priceReducer.load === 'idle' ? priceReducer.data.map((item:any, index:any) => {
                  return ( 
                          <RowItem
                          partnerId={null}
                          isOtcDrug={false}
                          highPriceAmount={null}
                          priceCurrency={"USD"}
                          retailerName={item.retailer.name}
                          retailerId={item.retailer.id}
                          retailerLogo={item.retailer.logo}
                          drugName={chosen.Manufacturer.split(" ")[0]}
                          dosageDisplay={chosen.Dosage}
                          pbmId={item.pbmId}
                          formulationId={priceSettings?.formulationId}
                          ndc={priceSettings?.formulationId}
                          key={item.retailer.name}
                          locationId={item.retailer.location.id}
                          locationPhoneNumber={item.retailer.location.phoneNumber}
                          lowPriceAmount={item.price.amount}
                          quantityDisplay={chosen.Quantity}
                          drugUrlSlug={chosen.Manufacturer.split(
                            " "
                          )[0].toLowerCase()}
                          drugId={currentMedication.id}
                          name={item.retailer.name}
                          price={item.price.display}
                          label=" Optum Perks"
                          index={index}
                          onClick={() => {}}
                          distance={`${item.distance}`}
                        />
              )})  
             
                : (<Loader />)
              }

            </div>
          )}
        </div>

        <div className="result-page__space-fill"> </div>
        <Footer />
      </div>  
    
    </>
  );
};







/*

  // const manufacturer: any = currentMedication.variants.map((e: any) => {
      //   return `${e.name} (${e.drugType})`;
      // });

      // const form: any = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .map((e: any) => {
      //     return e.form;
      //   })
      //   .filter(function (value: any, index: any, self: any) {
      //     return self.indexOf(value.trim()) === index;
      //   });
      // const dosage = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .map((e: any) => {
      //     return e.dosage;
      //   })
      //   .map((e: any) => {
      //     return e.display;
      //   });
      // const quantity = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .filter((e: any) => {
      //     return e.dosage.display === chosen.Dosage;
      //   })
      //   .map((e: any) => {
      //     return e.commonQuantities;
      //   })
      //   .flat()
      //   .map((e: any) => {
      //     return e.display;
      //   });

*/









        /* 
        // const formId = currentMedication[0].defaultSettings.formulationId;
        // const defaultMedQuantity = currentMedication[0].defaultSettings.quantity;
        // const currentName = currentMedication[0].formulations.filter((item:any) => item.name=== location.state.name)[0];
        // const formulations = currentMedication[0].formulations;
        // const defaultArr = formulations.filter((item:any) => item.id === formId)[0];

        // const defaultForm = defaultArr.form;
        // const defaultDosage = defaultArr.dosage.display;
        // const defaultQuantity = defaultArr.commonQuantities.find((item:any) => item.value === defaultMedQuantity).display;

        // const formulationsName = formulations.filter((item:any) => item.name === currentName.name);

        // const formulationsNameForm = formulationsName.find((item:any) => item.form === defaultForm);
        // const formulationsNameDosage = formulationsName.find((item:any) => item.dosage.display === defaultDosage);
        // const formulationsNameQuantity = formulationsName.map((e:any) => e.commonQuantities).flat().find((item:any) => item.display === defaultQuantity);

        // const currentForm = formulationsNameForm !== undefined ? defaultForm : currentName.form;
        // const currentDosage = formulationsNameDosage !== undefined ? defaultDosage : currentName.dosage.disaplay;

        // if(formulationsNameQuantity === undefined){
        //   setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage});
        // }else{
        //   setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage, Quantity: defaultQuantity});
        // }
          */


              // const formulationId = formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .filter((e: any) => {
      //     return e.dosage.display === chosen.Dosage;
      //   })
      //   .map((e: any) => {
      //     return e.commonQuantities;
      //   })
      //   .flat()
      //   .filter((e: any) => {
      //     return e.display === chosen.Quantity;
      //   })
      //   .map((e: any) => {
      //     return e.ndc;
      //   });
      // const value = formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .filter((e: any) => {
      //     return e.dosage.display === chosen.Dosage;
      //   })
      //   .map((e: any) => {
      //     return e.commonQuantities;
      //   })
      //   .flat()
      //   .filter((e: any) => {
      //     return e.display === chosen.Quantity;
      //   })
      //   .map((e: any) => {
      //     return e.value;
      //   });