import PhoneProvider from "./PhoneProvider"
import PhoneCounter from "./PhoneCounter"
import Phonelist from "./PhoneList"

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
