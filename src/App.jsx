import PhoneProvider from "./Components/PhoneProvider"
import PhoneCounter from "./PhoneCounter"
import Phonelist from "./Components/PhoneList"

function App() {

  return (
    <>
    <PhoneProvider>
      <Phonelist/>
      <PhoneCounter/>
    </PhoneProvider>
      
    </>
  )
}

export default App
