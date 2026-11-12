import { createContext, useContext, useState } from "react";


const PhoneContext = createContext()

const PhonesList = ["Apple", "Samsung", "Blackberry"]

function PhoneProvider({children}){
    const [phones, setPhone] = useState(PhonesList)
    return (
        <PhoneContext.Provider value={{phones}}>
            {children}
        </PhoneContext.Provider>
    )
}

export const usePhoneContext = ()=> useContext(PhoneContext)

export default PhoneProvider