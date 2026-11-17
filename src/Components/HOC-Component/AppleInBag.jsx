// Import the HOC function that will add the reusable bag wrapper.
import withFruitBag from "./withFruitBag";

// This is the original component: it describes only the apple content.
function AppleInBag() {
    return (
        <div>
            <h3>Apple</h3>
            <p>A crisp red apple.</p>
        </div>
    );
}

// Pass AppleInBag into the HOC.
// Export the enhanced component returned by withFruitBag.
export default withFruitBag(AppleInBag);
