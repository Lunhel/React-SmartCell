import { useState } from "react";

export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState (valorInicial);

    const aumentarContador = () => {
        if(contador < valorMaximo) {
             setContador(contador + 1);
        }
    }

        const decrementarContador = () => {
            if(contador > valorInicial) {
                setContador(contador -1);
            }
        }        

    return {contador, aumentarContador, decrementarContador}

}
