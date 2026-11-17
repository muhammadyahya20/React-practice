// Import the HOC function that will add the reusable bag wrapper.
import withFruitBag from "./withFruitBag";

// This is the original component: it describes only the banana content.
function BananaInBag() {
    return (
        <div>
            <h3>Banana</h3>
            <p>A ripe yellow banana.</p>
        </div>
    );
}

// Pass BananaInBag into the HOC.
// Export the enhanced component returned by withFruitBag.
export default withFruitBag(BananaInBag);
