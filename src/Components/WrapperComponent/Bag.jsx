// Bag is a regular wrapper component.
// It receives nested JSX through props.children and places that content
// inside a styled <div>.
function Bag(props) {
    // Inline styles for the outer bag/container.
    const bagStyles = {
        padding: "20px",
        border: "2px solid #9ca3af",
        borderRadius: "12px",
        background: "#fff7ed",
        margin: "20px 0",
    };

    return (
        <div style={bagStyles}>
            {/* This heading belongs to the wrapper itself. */}
            <h2>Fruit Bag (Wrapper Component)</h2>

            {/* Render whatever JSX is nested between <Bag> and </Bag>. */}
            {props.children}
        </div>
    );
}

export default Bag;
