import { useState } from "react";

export default function CVForm({ initialData, toggleEditMode, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditMode();
    onSubmit(formData);
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleCancel() {
    setFormData(initialData);
    toggleEditMode();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInput}
        ></input>

        <label htmlFor="lastName">Last Name </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInput}
        ></input>

        <label htmlFor="position">Position </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleInput}
        ></input>

        <label htmlFor="phone">Phone </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInput}
        ></input>

        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  );
}
