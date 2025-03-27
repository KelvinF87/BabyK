import React from "react";
import { Hero } from "../components/Hero";
import { ListActividad } from "../components/ListActividad";
import { motion } from 'framer-motion';
import {pageVariants2} from '../animation/NextPage2';

const dataActividades = [
  {
    id: 1,
    name: "Actividad 1",
    description: "Descripción de la actividad 1",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      rating: 3
  },
  {
    id: 2,
    name: "Actividad 2",
    description: "Descripción de la actividad 2",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      rating: 1
  },
  {
    id: 3,
    name: "Actividad 3",
    description: "Descripción de la actividad 3",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      rating: 4
  },
];
const dataCB = [
  {
    id: 1,
    name: "Ludoteca Bilingüe Dos+2",
    description: "Servicio de guardería en HORARIO de MAÑANA y de TARDE.",
    image:
      "https://arucasmola.com/wp-content/uploads/2022/03/WhatsApp-Image-2024-08-16-at-20.06.39-1.jpeg",
      rating: 5
  },

];
export const HomePage = () => {


  
    return (
      <motion.div
      variants={pageVariants2}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ 
        width: '100%', 
        height: '100%', 
        overflowX: 'hidden', 
        overflowY: 'scroll' // Permite scroll vertical si es necesario
      }}
    >
        <Hero dataCB={dataCB} />
        <ListActividad dataActividades={dataActividades} />
      </motion.div>
    //   <motion.div
    //     variants={pageVariants}
    //     initial="initial"
    //     animate="animate"
    //     exit="exit"
    //     className="overflow-hidden" // Evita el scroll horizontal
    //   >
    //     <Hero dataCB={dataCB} />
    //     <ListActividad dataActividades={dataActividades} />
    //   </motion.div>
    );
  };