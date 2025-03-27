import React from "react";
import { Hero } from "../components/Hero";
import { ListActividad } from "../components/ListActividad";
import { motion } from "framer-motion";
import { pageVariants2 } from "../animation/NextPage2";
const dataActividades = [
  {
    id: 1,
    name: "Actividad 1",
    description: "Descripción de la actividad 1",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 2,
    name: "Actividad 2",
    description: "Descripción de la actividad 2",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 3,
    name: "Actividad 3",
    description: "Descripción de la actividad 3",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
];
const dataCB = [
  {
    id: 1,
    name: "Katia Lizbeth y Kelvin Daniel",
    description: "Los más wapos de la calse.",
    image:
      "https://arucasmola.com/wp-content/uploads/2022/03/WhatsApp-Image-2024-08-16-at-20.06.39-1.jpeg",
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
    </motion.div>
  );
};
