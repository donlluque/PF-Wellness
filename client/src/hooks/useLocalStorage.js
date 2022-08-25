import { useState } from 'react';

export function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error){
            return initialValue;
        }
    });
    // función que devuelve el valor que tendrá el estado inicial. Item es para recuperar el localstorage, el elemento que tenemos
    // en la key que pasamos como parámetro.
    
    
    const setValue = value => {
        try{
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch(error){
            console.log(error)
        }
    }
}
//recibe como parámetro el valor que queremos guardar. SetStoredValue guarda en este estado local el valor.
//JSON.stringify = como valor le podemos pasar cualquier cosa, pero en el local storage solo se pueden guardar del tipo string.