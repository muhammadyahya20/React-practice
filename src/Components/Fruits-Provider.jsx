import { createContext, useContext, useState } from "react";


const fruitsContext = createContext()

const fruitslist = ["Apple", "Mango", "Banana", "Kiwi"]

function FruitsProvider(props) {
    const [fruits, setFruits] = useState(fruitslist)
    return (
        <fruitsContext.Provider value = {{fruits, setFruits}}>
            {props.children}
        </fruitsContext.Provider>

    )
}

export const useFruitsContext = () => useContext(fruitsContext)

export default FruitsProvider