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
import { getDistance, convertDistance } from "geolib";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Loader, PlugSvg, RowItem, TileItem } from "../../components";
import {
  HeaderLogoImage,
  LocationIconSvg,
  SearchIconSvg,
} from "../../assets/images";
import axios from 'axios';
import { InputField, Dropdown, ItemsControl, Footer } from "../../components";
import { ITEMS_CONTROL_MODE } from "../../components/ItemsControl";
import CurrentMed from "../../store/currentMed/action";
import TopMed from '../../store/topMed/action';
import SearchZip from '../../store/SearchZip/action';
import { ClearZip } from "../../store/SearchZip/action";
import getPrice from '../../store/Price/actions';
import '../../assets/pages/result.scss';
export const ResultPage: FC = () => {
  const [error, setError] = useState(false);
  const [errorZip, setErrorZip] = useState(false);
  const [searchMed, setSearchMed] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [cookies, setCookies] = useCookies();
  const [medicationError, setMedicationError] = useState(false);
  const currentMedication = useSelector((state:any) => state.currentReducer);
  const [description,setDescription] = useState("");
  const topMed = useSelector((state:any) => state.topMedReducer.top);
  const zip = useSelector((state:any) => state.zipReducer);
  const price = useSelector((state:any) => state.priceReducer.data);
  const newPrice = useSelector((state:any) => state.priceReducer);
  const history = useHistory();
  const location:any = useLocation();
  const [open, setOpen] = useState(false);
  const mockSorting = ["LOWEST", "HIGHEST"];
  const [itemsMode, setItemsMode] = useState(ITEMS_CONTROL_MODE.TILES);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
  }, [searchZip, dispatch]);
  useEffect(() => {
    dispatch(TopMed({authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}));
  }, [])
  useEffect(() => {
    if(location.state.name.length > 0){
      dispatch(CurrentMed(location.state.name,{authorization: `Bearer ${cookies['token']}`, 'x-account-id':cookies['account']}))
    }
  }, [dispatch, location]);
  const [chosen, setChosen]: any = useState({
    Manufacturer: "no items",
    Form: "no items",
    Dosage: "no items",
    Quantity: "no items",
  });
  useEffect(() => {
      if(currentMedication.length){
        const formId = currentMedication[0].defaultSettings.formulationId;
        const defaultMedQuantity = currentMedication[0].defaultSettings.quantity;
        const currentName = currentMedication[0].formulations.filter((item:any) => item.name=== location.state.name)[0];
        const formulations = currentMedication[0].formulations;
        const defaultArr = formulations.filter((item:any) => item.id === formId)[0];

        const defaultForm = defaultArr.form;
        const defaultDosage = defaultArr.dosage.display;
        const defaultQuantity = defaultArr.commonQuantities.find((item:any) => item.value === defaultMedQuantity).display;

        const formulationsName = formulations.filter((item:any) => item.name === currentName.name);

        const formulationsNameForm = formulationsName.find((item:any) => item.form === defaultForm);
        const formulationsNameDosage = formulationsName.find((item:any) => item.dosage.display === defaultDosage);
        const formulationsNameQuantity = formulationsName.map((e:any) => e.commonQuantities).flat().find((item:any) => item.display === defaultQuantity);

        const currentForm = formulationsNameForm !== undefined ? defaultForm : currentName.form;
        const currentDosage = formulationsNameDosage !== undefined ? defaultDosage : currentName.dosage.disaplay;

        if(formulationsNameQuantity === undefined){
          setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage});
        }else{
          setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage, Quantity: defaultQuantity});
        }

        
      }
    
  }, [currentMedication]);
  const SubmitActionValue = () => {
    if(searchMed && topMed.filter((item:any) => item.label.label === searchMed)[0]){
      history.push({
        state:{
          ...location.state,
          name: searchMed,
        }
      })
      setError(false);
      return true;
    }else{
      searchMed && topMed.filter((item:any) => item.label.label === searchMed)[0] ? setError(false) : setError(true);
      return false;
    }
  }
  const SubmitActionZip = () => {
    if(searchZip){
      history.push({
        state:{
          ...location.state,
          location:zip
        }
      })
      setErrorZip(false);
      return true;
    }else{
      searchZip ? setErrorZip(false) : setErrorZip(true);
      return false;
    }
  }


  const sorted: any = useMemo(() => {
    if (currentMedication.length > 0) {
      const manufacturer: any = currentMedication[0].variants.map((e: any) => {
        return `${e.name} (${e.drugType})`;
      });

      const form: any = currentMedication[0].formulations
        .filter((e: any) => {
          return (
            e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
          );
        })
        .map((e: any) => {
          return e.form;
        })
        .filter(function (value: any, index: any, self: any) {
          return self.indexOf(value.trim()) === index;
        });
      const dosage = currentMedication[0].formulations
        .filter((e: any) => {
          return (
            e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
          );
        })
        .filter((e: any) => {
          return e.form === chosen.Form;
        })
        .map((e: any) => {
          return e.dosage;
        })
        .map((e: any) => {
          return e.display;
        });
      const quantity = currentMedication[0].formulations
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
        .map((e: any) => {
          return e.display;
        });
        console.log("render quantity",chosen.Quantity);
      return {
        manufacturer: manufacturer,
        form: form,
        dosage: dosage,
        quantity: quantity,
      };
    }
    return;
  }, [
    currentMedication,
    location.state,
    chosen.Manufacturer,
    chosen.Form,
    chosen.Dosage,
  ]);

  const priceSettings = useMemo(() => {
    if (currentMedication.length > 0) {
      const formulationId = currentMedication[0].formulations
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
      const value = currentMedication[0].formulations
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
        const info = currentMedication[0].formulations
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
        
      return {
        formulationId: formulationId[0],
        quantity: value[0],
        type: info
      };
    }
    return ;
  }, [chosen, currentMedication]);

  const priceUniq = useMemo(() => {
    if (newPrice !== undefined && priceSettings?.formulationId !== undefined) {
      const uniq = Array.from(
        newPrice
          ?.reduce((m: any, t: any) => m.set(t.retailer.name, t), new Map())
          .values()
      ).filter((item:any) => item.retailer.id !== 'store')
      .map((e:any)=>{
        if(e.price.display.split(".")[1].length < 2){
          return {...e,price:{...e.price,display:e.price.display + '0'}}
        }
        return e;
      });
      const distance = uniq
        .map((e: any) => {
          return getDistance(
            {
              lat: location.state.location[0].location.split(",")[0],
              lng: location.state.location[0].location.split(",")[1],
            },
            {
              lat: e.retailer.location.coordinates.latitude,
              lng: e.retailer.location.coordinates.longitude,
            }
          );
        })
        .map((e: any) => {
          return `${convertDistance(e, "mi").toFixed(2)} mi`;
        });
        const dist = uniq.map((e:any,item:any) => {
          return e.distance = distance[item];
        });
        const sorting = uniq.sort((a:any,b:any)=>{
          if(parseFloat(a.price.amount) < parseFloat(b.price.amount)){
            return -1;
          }else if(parseFloat(a.price.amount) > parseFloat(b.price.amount)){
            return 1;
          }else{
            return a.distance.split(" ")[0] - b.distance.split(" ")[0];
          }
        })
        setLoading(false);
      return {
        uniq: sorting,
        distance: distance,
        sort:sorting
      };
    }
    return ;
  }, [newPrice]);

  useEffect(() => {
    if (priceSettings && priceSettings.type && priceSettings.formulationId && priceSettings.quantity) {
       dispatch(getPrice(
          priceSettings.quantity, 
          priceSettings.formulationId, 
          priceSettings.type.drugType, 
          priceSettings.type.name, 
          priceSettings.type.gpi14, 
          false,
          location.state.location[0].location,
          location.state.location[0].zip,
          ));
          setLoading(true);
    }
  }, [priceSettings,dispatch]);
  return (
    <>
      <div className="result-page">
        <div className="result-page__header">
          <div className="result-page__row">
            <Link to="/">
              <img src={HeaderLogoImage} alt="" />
            </Link>
            <div className="input_search_error">
              <InputField
                value={searchMed}
                onChange={setSearchMed}
                placeholder="Type your drug name"
                iconUrl={SearchIconSvg}
                classes="result-page__header-input"
                autocompleteClasses="result-page__autocomplete"
                onSubmit={SubmitActionValue}
                grouping={true}
                autocomplete={searchMed.length >= 3 ? topMed : []}
                errorHandle={error}
                haveSubmit
                buttonText="Search"
                error="Incorrect medication"
                selected={true}
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
                  onSubmit={SubmitActionZip}
                  autocomplete={zip}
                  haveSubmit
                  buttonText="Search"
                  errorHandle={errorZip}
                  error="Incorrect ZIP code"
                />
                {errorZip ? (
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
                
             { priceUniq && !loading ? priceUniq.uniq.map((item:any, index:any) => ( 
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
                   drugId={currentMedication[0].id}
                   name={item.retailer.name}
                   price={item.price.display}
                   label=" Optum Perks"
                   index={index}
                   onClick={() => {}}
                   distance={`${item.distance}`}
                 />
              ))  
             
                : (<Loader />)
              }
             
                
            </div>
          </div>
          )}
          {itemsMode === ITEMS_CONTROL_MODE.ROWS && (
            <div className="result-page__rows-wrapper">
                { priceUniq  ? priceUniq.uniq.map((item:any, index:any) => ( 
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
                          drugId={currentMedication[0].id}
                          name={item.retailer.name}
                          price={item.price.display}
                          label=" Optum Perks"
                          index={index}
                          onClick={() => {}}
                          distance={`${item.distance}`}
                        />
              ))  
             
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

