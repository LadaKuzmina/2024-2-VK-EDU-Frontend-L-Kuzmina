import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {registerUser} from "../api/auth";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        bio: "",
        avatar: null,
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) =>
            payload.append(key, value)
        );

        try {
            await registerUser(payload);
            navigate("/auth");
        } catch (error) {
            setError("Registration failed");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <textarea
                    name="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                />
                <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
