import React, { useEffect, useState } from "react";

export const ListActividad = ({ dataActividades }) => {
  const [actividades, setActividades] = useState([]);
  useEffect(() => {
    setActividades(dataActividades);
  }, []);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md overflow-hidden w-full mb-16">
      {actividades.map((miActividad) => (
        <div key={miActividad.id}>
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>
          <li className="list-row">
            <div>
              <img className="size-10 rounded-box" src={miActividad.image} />
            </div>
            <div>
              <div>{miActividad.name}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {miActividad.description}
              </div>
            </div>
            <div className="rating">
              <div
                className="mask mask-star"
                aria-label="1 star"
                aria-current={miActividad.rating >= 1 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="2 star"
                aria-current={miActividad.rating >= 2 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="3 star"
                aria-current={miActividad.rating >= 3 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="4 star"
                aria-current={miActividad.rating >= 4 ? "true" : "false"}
              ></div>
              <div
                className="mask mask-star"
                aria-label="5 star"
                aria-current={miActividad.rating >= 5 ? "true" : "false"}
              ></div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};
