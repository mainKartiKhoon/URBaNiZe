import { createContext, useState } from "react";
import { realEstateDataset } from "../Datasets/RealEstateDataset";

export const RealEstateContext = createContext(null);

export const RealEstateProvider = (props) => {
    let [propertyName, setPropertyName] = useState("Tokyo");
    let [currObjectInRealEstate, setCurrObjectInRealEstate] = useState(null);
    return (
        <RealEstateContext.Provider value={{realEstateDataset, propertyName, setPropertyName, currObjectInRealEstate, setCurrObjectInRealEstate}}>
            {props.children}
        </RealEstateContext.Provider>
    )
}