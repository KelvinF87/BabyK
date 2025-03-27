export const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw", // Se desliza desde la derecha
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring", // Efecto de resorte para la vibración
      stiffness: 50, // Rigidez del resorte (ajusta para la vibración)
      damping: 10,   // Amortiguación del resorte (ajusta para la vibración)
      // Agregamos una vibración en el eje x
      x: { duration: 0.5, ease: "easeOut", times: [0, 0.3, 0.5, 0.7, 1], values: [0, -8, 4, -4, 0] },
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw", // Se desliza hacia la izquierda
    transition: {
      duration: 0.5,
    },
  },
};