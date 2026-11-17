// This is a Higher-Order Component (HOC).
// An HOC is a function that receives a component and returns a new component.
function withFruitBag(WrappedComponent) {
    // Return a new component that adds the bag wrapper around the original.
    // The returned component receives the props intended for WrappedComponent.
    return function FruitBag(props) {
        // Inline styles for the wrapper added by this HOC.
        const bagStyles = {
            padding: "20px",
            border: "2px solid #9ca3af",
            borderRadius: "12px",
            background: "#f0fdf4",
            margin: "20px 0"
        };

        return (
            <div style={bagStyles}>
                {/* This heading is supplied by the HOC's wrapper. */}

                <h2>Fruit Bag (HOC)</h2>

                {/* Render the component passed into the HOC.
                    Spread the received props so the original component
                    receives the same props passed to the enhanced component. */}
                <WrappedComponent {...props} />
            </div>
        );
    };
}

export default withFruitBag;
