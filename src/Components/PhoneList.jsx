
import { usePhoneContext } from "./PhoneProvider";

// 1. Create the Phonelist component.
// This component will display the phones shared through Context API.
function Phonelist(){

    // 2. Consume the PhoneContext using our custom hook.
    // Extract the phones property from the context object.
    const { phones } = usePhoneContext();

    // 3. Return JSX to render the UI.
    return (
        <>
            {/* 4. Display the heading */}
            <h1>This is a Phones list created by Context API</h1>

            {/* 5. Use map() to iterate over the phones array.
                 Each iteration gives us one individual phone. */}
            {phones.map((phone, index) => (

                // 6. Render each phone inside an h2 element.
                // key helps React identify each element in the list.
                <h2 key={index}>{phone}</h2>

            ))}
        </>
    );
}

// 7. Export the component so App.jsx can import and render it.
export default Phonelist;
