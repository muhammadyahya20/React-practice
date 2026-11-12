import { usePhoneContext } from "./PhoneProvider";

function Phonelist(){
    const {phones} = usePhoneContext()

    return (
        <>
        <h1>This is a Phones list created by Context API</h1>
        {phones.map((phone, index) => (
            <h2 key={index}>{phone}</h2>
        ))}
        </>
    )
}

export default Phonelist