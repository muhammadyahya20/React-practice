
import { useState } from "react";

// Displays the password validation message when the password is too short
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">
      Password should have at least 8 characters
    </p>
  );
};

function SignUpForm() {
  // Form field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Password uses an object because we also track whether the user has interacted with it
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  // "role" represents the placeholder/default option in the dropdown
  const [role, setRole] = useState("role");

  // Checks whether all required fields meet the validation criteria
  const getIsFormValid = () => {
    if (password.value.length <= 7) {
      return false;
    }

    if (firstName === "") {
      return false;
    }

    if (email === "") {
      return false;
    }

    // The form is invalid if the user hasn't selected a role yet
    if (role === "role") {
      return false;
    }

    // If none of the validation conditions fail, the form is valid
    return true;
  };

  // Resets all form fields back to their initial values
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  // Handles form submission
  const handleSubmit = (e) => {
    // Prevents the browser's default form submission/reload behavior
    e.preventDefault();

    // Only proceed if all validation requirements are satisfied
    if (getIsFormValid() === true) {
      alert("Account created!");

      // Clear the form after successful submission
      clearForm();
    }
  };

  return (
    <>
      {/* Component styling */}
      <style>
        {`
          .App {
            display: flex;
            flex: 1;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }

          fieldset {
            display: flex;
            width: 480px;
            padding: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            flex-direction: column;
          }

          label {
            margin-bottom: 8px;
            font-size: 14px;
          }

          sup {
            color: red;
            top: -2px;
            font-size: 95%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }

          input,
          select {
            border-radius: 4px;
            border: 1px solid #ccc;
            height: 32px;
            padding: 0 8px;
          }

          .Field {
            position: relative;
            padding-bottom: 24px;
            display: flex;
            flex-direction: column;
          }

          .FieldError {
            position: absolute;
            bottom: -6px;
            color: red;
            font-size: 12px;
          }

          .Row {
            display: flex;
            flex-direction: row;
          }

          button {
            padding: 12px;
            width: 240px;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: darkblue;
            color: white;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
          }

          /* Changes the button appearance when the form is invalid */
          button:disabled,
          button[disabled] {
            border: 1px solid #999999;
            background-color: #cccccc;
            color: #666666;
            cursor: not-allowed;
          }
        `}
      </style>

      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>

            {/* First name field */}
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>

              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>

            {/* Last name field */}
            <div className="Field">
              <label>Last name</label>

              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            {/* Email field */}
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>

            {/* Password field */}
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>

              <input
                type="password"
                value={password.value}
                onChange={(e) =>
                  setPassword({
                    value: e.target.value,
                    isTouched: true,
                  })
                }
                placeholder="Password"
              />

              {/* Show the error only after the user has interacted with the field */}
              {password.isTouched && password.value.length <= 7 && (
                <PasswordErrorMessage />
              )}
            </div>

            {/* Role dropdown */}
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>

              {/* Controlled select: React state determines the selected option */}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="role" disabled>
                  Please select
                </option>

                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>

            {/* Button remains disabled until the form passes validation */}
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

// Makes this component available for importing into other files
export default SignUpForm;
