import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Spinner from "./Spinner";
import useAxios from "../hooks/useAxios";

function ProductList() {
  //const [products, setData] = useState([]);
 const {data, isLoading, error} = useAxios(
  "https://api.escuelajs.co/api/v1/products"
  );
  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  // useEffect(() => {
  // //   const getData = async () => {
  // //     const results = await axios.get(
  //       "https://api.escuelajs.co/api/v1/products"
  //     );

  // //     //setProducts(results.data);
  //    };

  // //   //getProducts();
  // }, []);

     console.log(data);

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
            {data.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

export default ProductList;
