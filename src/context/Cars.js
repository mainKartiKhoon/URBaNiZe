import { createContext, useState } from "react";
import { CarsDataset } from "../Datasets/CarsDataset";

export const CarsContext = createContext(null);

export const CarsProvider = (props) => {
    // let a =10;
    const [currObjectInCars, setCurrObjectInCars] = useState(null);
    return (
        <CarsContext.Provider value={{CarsDataset,currObjectInCars, setCurrObjectInCars }}>
            {props.children}
        </CarsContext.Provider>
    )
}