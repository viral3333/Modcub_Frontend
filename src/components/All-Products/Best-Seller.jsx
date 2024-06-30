import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Route/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  return (
    <div
      className={`w-full bg-white p-6 rounded-lg mb-12 shadow-xl mt-5 overflow-hidden`}
    >
      <div className="flex justify-between">
        <h1 className="text-black font-semibold text-xl">Best Seller</h1>
        <Link to={"/best-selling"} className="h-8 w-20 bg-[#005DC9] flex justify-center items-center text-white rounded-md">See All</Link>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] my-3 border-0">
        {data && data.length !== 0 && (
          <>
            {data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
