import React, { useEffect, useState } from "react";

export const ListBaby = ( {dataBabys,dataBB} ) => {
  const [babys, setBabys] = useState([]);
  const [dataInfoBaby, setDataInfoBaby] = useState([]);

  useEffect(() => {
    setBabys(dataBabys);
    setDataInfoBaby(dataBB);
  }, []);
  
  useEffect(() => {
    console.log(dataInfoBaby.id);

  }, [babys]);
  return (
    <ul className="list bg-base-100 rounded-box shadow-md overflow-hidden w-full mb-16">
      {/* Edad:{dataInfoBaby} */}
      {babys.map((myBabys) => (
        <div key={myBabys.id}>
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>
          <li className="list-row">
            <div>
              <img className="size-10 rounded-box" src={myBabys.image} />
            </div>
            <div>
              <div>{myBabys.name}</div>
              {myBabys.fecha}
              <div className="text-xs uppercase font-semibold opacity-60">
                {myBabys.description}
                <br />
              </div>
            </div>
            <div className="rating">
              <div
                className="mask mask-star"
                aria-label="1 star"
                aria-current={myBabys.rating >= 1 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="2 star"
                aria-current={myBabys.rating >= 2 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="3 star"
                aria-current={myBabys.rating >= 3 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="4 star"
                aria-current={myBabys.rating >= 4 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="5 star"
                aria-current={myBabys.rating >= 5 ? "true" : "false"}
              ></div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};
