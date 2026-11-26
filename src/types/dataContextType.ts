import type { dataArray } from "./apiResponseType";

export default interface dataContext {
    data: dataArray[],
    setData: React.Dispatch<React.SetStateAction<dataArray[]>>,
    fetchAllProducts: () => Promise<void>
}