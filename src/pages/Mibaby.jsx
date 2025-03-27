import React from "react";
import { Hero } from "../components/Hero";
import { ListBaby } from "../components/ListaBaby";
import { motion } from "framer-motion";
import { pageVariants2 } from "../animation/NextPage2";
const dataBabys = [
  {
    id: 1,
    name: "Estado",
    description: "Tomó poca leche, pero comió bien.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    fecha: "2025-03-27",
    rating: 3,
  },
];
const dataCB = [
  {
    id: 1,
    name: "Katia Lizbeth y Kelvin Daniel",
    description: "Los más wapos de la calse.",
    edad: "1 años",
    image:
      "https://arucasmola.com/wp-content/uploads/2022/03/WhatsApp-Image-2024-08-16-at-20.06.39-1.jpeg",
      padres: "Kelvin y Katia",
      dni:["12345678","12345678"],
  },
];
export const Mibaby = () => {
  return (
    <motion.div
      variants={pageVariants2}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "scroll", // Permite scroll vertical si es necesario
      }}
    >
      <div>Mibaby</div>
      <Hero dataCB={dataCB} />
      <ListBaby dataBabys={dataBabys} dataBB={dataCB}/>
    </motion.div>
  );
};
