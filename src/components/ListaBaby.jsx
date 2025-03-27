import React, { useEffect, useState } from "react";

export const ListActividad = ({ dataBabys }) => {
  const [babys, setBabys] = useState([]);

  useEffect(() => {
    setBabys(dataBabys);
  }, []);
  return (
    <ul className="list bg-base-100 rounded-box shadow-md overflow-hidden w-full mb-16">
     { dataBabys.map((myBabys)=> <div key={myBabys.id}>
         <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          </li>
          <li className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                src={myBabys.image}
              />
            </div>
            <div>
              <div>{myBabys.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {myBabys.description}
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
     </div>
    
)}
    </ul>
  );
};
