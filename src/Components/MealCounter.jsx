import { useMealsContext } from "./MealsProvider";

function MealsCounter(){
    const {meals} = useMealsContext()

    return(
        <div>
            <h2>The number of meals  consumed {meals.length}</h2>
        </div>
    )
}

export default MealsCounter