export const pageVariants2 = {
    initial: {
      opacity: 0,
      scale: 0.8, // Inicia en una escala más pequeña
      x: 0, // Centrado horizontalmente
    },
    animate: {
      opacity: 1,
      scale: 1, // Escala a tamaño normal
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring", // Efecto de resorte para la vibración
        stiffness: 70, // Rigidez del resorte (ajusta para la vibración)
        damping: 10,   // Amortiguación del resorte (ajusta para la vibración)
        // Agregamos una vibración en el eje x
        x: { duration: 0.5, ease: "easeOut", times: [0, 0.3, 0.5, 0.7, 1], values: [0, -8, 4, -4, 0] },
        // Agregamos una vibración en el eje y
        y: { duration: 0.5, ease: "easeOut", times: [0, 0.3, 0.5, 0.7, 1], values: [0, -4, 2, -2, 0] },
      },
    },
    exit: {
      opacity: 0,
      scale: 1, // Opcional: escala a tamaño normal antes de salir
      x: "-100vw", // Se desliza hacia la izquierda
      transition: {
        duration: 0.5,
      },
    },
  };