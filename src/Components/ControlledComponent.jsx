import { useState } from "react";

// Initial values for all form fields
const initialform = {
  firstname: "",
  lastname: ""
};

function Form() {
  // Store all form values in one state object
  const [form, setForm] = useState(initialform);

  // Update the corresponding field whenever the user types
  function handleChange(event) {
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the browser's default form submission
    console.log(form); // Display form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>

      <input
        type="text"
        value={form.firstname}
        id="firstname"
        name="firstname"
        onChange={handleChange}
        placeholder="Enter your first name"
      />

      <label htmlFor="lastname">Last Name</label>

      <input
        type="text"
        value={form.lastname}
        id="lastname"
        name="lastname"
        onChange={handleChange}
        placeholder="Enter your last name"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;