import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    //setCounter(counter + value);
    // Para la prueba se necesito una modificaion de la funcion porque
    // el current del state no esta disponible dentro de la funcion
    //  y al llamar a la funcion fuera de su contexto se reinicia el counter...

    setCounter((current) => current + value);
  };

  const decrease = (value = 1) => {
    //Verificar funcion de increment para entender el cambio de la funcion
    if (counter === 0) return;
    //setCounter(counter - 1);\
    setCounter((current) => current - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrease, reset };
};
