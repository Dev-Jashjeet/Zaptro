import axios from "axios";
import { createContext, useState, type ReactNode } from "react";
import type getApiResponse from "../types/apiResponseType";
import type { dataArray } from "../types/apiResponseType";
import type dataContext from "../types/dataContextType";

export const DataContext = createContext<dataContext|null>(null);

function DataProvider({children}: {children: ReactNode}) {

    const [data, setData] = useState<dataArray[]>([]);

    // fetch API for products details
    const fetchAllProducts = async (): Promise<void> => {
        try {
            const res: getApiResponse = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
        } catch(err) {
            console.log(err);
        }
        return;
    }
    // --

    return(
        <DataContext.Provider value={{data, setData, fetchAllProducts}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
