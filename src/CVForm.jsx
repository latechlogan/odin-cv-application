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
