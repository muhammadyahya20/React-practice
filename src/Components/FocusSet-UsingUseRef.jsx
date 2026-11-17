import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  function focusInput() {
    inputEl.current.focus();
  }

  return (
    <>
      <input ref={inputEl} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default TextInputWithFocusButton;