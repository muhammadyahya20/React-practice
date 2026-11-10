import { useState } from "react";

function RegisterForm(props) {
    const [form, setForm] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email
    });

    function changeHandler(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={changeHandler}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={changeHandler}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
            />
        </>
    );
}

export default RegisterForm;