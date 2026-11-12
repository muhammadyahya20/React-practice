
import { createContext, useContext, useState } from "react";

// 1. Create a Context object.
// This will allow us to share data between components
// without passing props manually through every component.
const PhoneContext = createContext();

// 2. This is our original array containing phone names.
// We will use it as the initial state.
const PhonesList = ["Apple", "Samsung", "Blackberry"];

// 3. Create a custom Provider component.
// children represents the components placed inside
// the PhoneProvider tags in App.jsx.
function PhoneProvider({ children }) {

    // 4. Create state to store our phones array.
    // phones = current state (the array)
    // setPhone = function used to update that state
    // PhonesList = initial state value
    const [phones, setPhone] = useState(PhonesList);

    // 5. Provide the phones state to all components
    // wrapped inside PhoneProvider.
    // value={{phones}} is shorthand for value={{phones: phones}}
    return (
        <PhoneContext.Provider value={{ phones }}>
            {children}
        </PhoneContext.Provider>
    );
}

// 6. Create a custom hook.
// Any component that calls usePhoneContext()
// can access the data stored in PhoneContext.
export const usePhoneContext = () => useContext(PhoneContext);

// 7. Export PhoneProvider so App.jsx can wrap
// components inside it.
export default PhoneProvider;
