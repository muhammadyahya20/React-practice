
import Bag from "./Components/WrapperComponent/Bag"
import Apple from "./Components/WrapperComponent/Apple"
import Banana from "./Components/WrapperComponent/Banana"

import AppleInBag from "./Components/HOC-Component/AppleInBag"
import BananaInBag from "./Components/HOC-Component/BananaInBag"

function App() {


  return (
    <div>
            <h1>React: Wrapper vs HOC</h1>

            {/* 1. Wrapper Component Example */}
            <h2>Wrapper Component</h2>

            <Bag>
                <Apple />
                <Banana />
            </Bag>

            {/* 2. Higher-Order Component Example */}
            <h2>Higher-Order Component</h2>

            <AppleInBag />
            <BananaInBag />
        </div>
  )
}

export default App
