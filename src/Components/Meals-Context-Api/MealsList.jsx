import { useMealsContext } from "./MealsProvider";

function MealsList(){
    const {meals} = useMealsContext()

    return(
        <div>
            <h1>Meals List created using context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}

export default MealsList