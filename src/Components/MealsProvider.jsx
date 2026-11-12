import { createContext, useContext, useState } from "react";

const MealsContext = createContext()

const Todaymeals = [ "Pizza", "Burger", "Fries"]

function MealsProvider({children}){
    const [meals, setMeals] = useState(Todaymeals)

    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsContext = () => useContext(MealsContext)

export default MealsProvider