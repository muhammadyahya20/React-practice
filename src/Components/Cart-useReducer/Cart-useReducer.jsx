
import { useReducer } from "react"

// Initial state: An object containing a cart array.
// The cart array contains individual product objects.
const initialState = {
    cart: [
        { id: 1, name: "Laptop", price: 1200, quantity: 1 },
        { id: 2, name: "Mouse", price: 40, quantity: 2 },
        { id: 3, name: "Keyboard", price: 75, quantity: 1 }
    ]
}

// Reducer function receives the current state and the dispatched action.
function ShoppingCart(state, action) {

    // INCREASE: Increase the quantity of the selected product.
    if (action.type === "increase") {

        return {
            // .map() iterates over every product and returns a new cart array.
            cart: state.cart.map(product => (

                // Compare the current product ID with the ID sent through dispatch.
                product.id === action.id

                    // If IDs match, create a new object with an increased quantity.
                    // Spread copies all existing properties; quantity is overwritten.
                    ? { ...product, quantity: product.quantity + 1 }

                    // If IDs don't match, return the original product unchanged.
                    : product
            ))
        }
    }

    // DECREASE: Decrease the quantity of the selected product.
    else if (action.type === "decrease") {

        return {
            cart: state.cart.map(product => (

                // Check whether the product ID matches AND quantity is greater than 1.
                product.id === action.id && product.quantity > 1

                    // If both conditions are true, decrease quantity by 1.
                    ? { ...product, quantity: product.quantity - 1 }

                    // Otherwise, return the original product unchanged.
                    : product
            ))
        }
    }

    // REMOVE: Completely remove the selected product from the cart.
    else if (action.type === "remove") {

        return {
            // .filter() creates a new array containing products
            // whose IDs do NOT match the selected product ID.
            cart: state.cart.filter(product => (
                product.id !== action.id
            ))
        }
    }

    // Handle any unsupported action type.
    else {
        throw new Error()
    }
}

export default function Cart() {

    // useReducer returns the current state and dispatch function.
    const [state, dispatch] = useReducer(ShoppingCart, initialState)

    return (
        <>
            <ul>

                {/* Display products whose quantity is greater than zero. */}
                {state.cart
                    .filter(product => product.quantity > 0)
                    .map(cart => (

                        // Render each product using its unique ID as the key.
                        <li key={cart.id}>
                            {cart.name} - {cart.price} - {cart.quantity}

                            {/* Dispatch an increase action with the selected product ID. */}
                            <button onClick={() => dispatch({
                                type: "increase",
                                id: cart.id
                            })}>
                                Add
                            </button>

                            {/* Dispatch a decrease action with the selected product ID. */}
                            <button onClick={() => dispatch({
                                type: "decrease",
                                id: cart.id
                            })}>
                                Minus
                            </button>

                            {/* Dispatch a remove action with the selected product ID. */}
                            <button onClick={() => dispatch({
                                type: "remove",
                                id: cart.id
                            })}>
                                Remove
                            </button>
                        </li>
                    ))}
            </ul>

            {/* Calculate the total value of all products in the cart. */}
            <p>
                Total: {
                    state.cart.reduce((total, product) => {

                        // Multiply price by quantity and add it to the accumulator.
                        return total + (product.price * product.quantity)

                    }, 0) // Initial accumulator value is 0.
                }
            </p>
        </>
    )
}
