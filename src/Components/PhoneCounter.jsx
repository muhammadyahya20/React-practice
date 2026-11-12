
import { usePhoneContext } from "./PhoneProvider";

// 1. Create the PhoneCounter component.
// This component will display the phone names and their counts.
function PhoneCounter(){

    // 2. Consume the PhoneContext using our custom hook.
    // Extract the phones array from the context object.
    const { phones } = usePhoneContext();

    // 3. Return JSX to render the UI.
    return(
        <>
            {/* 4. Use map() to iterate through the phones array.
                 Each iteration provides one individual phone. */}
            {phones.map((phone, index)=> (

                // 5. Render each phone inside a div.
                // key helps React identify each rendered element.
                // phone displays the current phone name.
                // : 1 displays its count.
                <div key={index}>{phone}: 1</div>

            ))}
        </>
    );
}

// 6. Export the component so App.jsx can import and render it.
export default PhoneCounter;
