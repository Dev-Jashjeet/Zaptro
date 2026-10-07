import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataProvider"
import FilterSection from "../components/FilterSection";
import ProductCart from "../components/ProductCart";
import type { dataArray } from "../types/apiResponseType";
import ProductSkeleton from "../skeleton/ProductSkeleton";


const Products = () => {
  let {data, fetchAllProducts}: {data: dataArray[], fetchAllProducts: Function} = useContext(DataContext);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [filteredData, setFilteredData] = useState<dataArray[] | null>(null);

  useEffect((): void => {
    fetchAllProducts();
  }, []);

  useEffect((): void => {
    setFilteredData(data);
  }, [data]);

  useEffect((): void => {
    if(category === "All") {
      setFilteredData(data);
      return;
    }

    category!="" && setFilteredData(data.filter((item: dataArray) => {
      return item.category === category
    }));

  }, [category]);
  
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {
          data?.length > 0? (
            <div className="flex gap-8">
                <FilterSection setSearch={setSearch} search={search} setCategory={setCategory} />
                <div className="grid grid-cols-4 gap-7 mt-10">
                  {
                    filteredData?.map((product: dataArray, index: number) => {
                      return <ProductCart key={index} product={product} />
                    })
                  }
                </div>
            </div>
          ): (
            <div>
              <ProductSkeleton />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
