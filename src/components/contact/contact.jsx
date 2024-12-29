import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "237e4fc6-d958-4aa0-8403-6bee26badc36");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormValues({ name: "", email: "", message: "" }); // Eingabefelder zurücksetzen
    }
  };

  return (
    <div className="contact">
      <form onSubmit={onSubmit}>
        <h1>Contact</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={4}
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Type text here..."
            required
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;
