import React, { useEffect, useState } from "react";

export const Hero = ({dataCB}) => {
  const [onedata, setOneData] = useState([]);
  useEffect(() => {
    const data = dataCB.find((midata) => midata.id == 1);
    setOneData(data);
  }, []);

  return (
    <>
      {
        <div className="card bg-base-100 image-full w-full shadow-sm p-1 ">
          <div className="absolute inset-0 bg-black opacity-0"></div>
          <figure>
            <img src={onedata.image} alt="Shoes" />
          </figure>
          <div className="card-body m-auto text-center ">
            <h2 className="text-center text-pink-200 text-3xl sombra-texto">
              {onedata.name}
            </h2>
            <p>{onedata.description}</p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
      }
    </>
  );
};
