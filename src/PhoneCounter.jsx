import { usePhoneContext } from "./PhoneProvider";

function PhoneCounter(){
    const {phones} = usePhoneContext()
    return(
        <>
        {phones.map((phone, index)=> (
            <div key={index}>{phone}: 1</div>
        ))}
        </>
    )
}

export default PhoneCounter