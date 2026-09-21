import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type getApiResponse from "../types/apiResponseType";
import type { dataArray } from "../types/apiResponseType";

export const DataContext = createContext(null);

function DataProvider({children}: {children: ReactNode}) {

    const [data, setData] = useState<dataArray[]>([]);

    // fetch API for products details
    const fetchAllProducts = async () => {
        try {
            const res: getApiResponse = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
        } catch(err) {
            console.log(err);
        }
    }
    // --

    return(
        <DataContext.Provider value={{data, setData, fetchAllProducts}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;