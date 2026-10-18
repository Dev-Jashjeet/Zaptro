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
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect((): void => {
    setFilteredData(data); 
  }, [data]);

  // Function to get items when check-box selected
  useEffect((): void => {
    if(category === "All") {
      setFilteredData(data);
      return;
    }

    category!="" && setFilteredData(data.filter((item: dataArray) => {
      return item.category === category
    }));

  }, [category]);

  // Function to get searched item when search in select box
  useEffect((): void => {
    setFilteredData(data?.filter((item: dataArray) =>
        item.title.toLowerCase().includes(search.toLowerCase())))
  }, [search]);
  
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {
          data?.length > 0? (
            <div className="flex gap-8">
                <FilterSection setSearch={setSearch} search={search} setCategory={setCategory} />
                <div className="grid grid-cols-4 gap-7 mt-10">
                  {
                    filteredData && filteredData.length>0 ? filteredData.map((product: dataArray, index: number) => {
                      return <ProductCart key={index} product={product} />
                    }) :
                    <div className="flex justify-center items-center md:h-150 md:w-225 mt-10">
                     <iframe className="w-full h-full" src="https://lottie.host/embed/6e9cc933-cf99-45a8-875d-71a391d08e6b/cwGq29UwGH.json"></iframe>
                    </div>
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
