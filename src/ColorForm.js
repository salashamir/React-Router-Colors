import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({ name: "", hex: "" });
  const history = useHistory();

  const handleChange = (evt) => {
    setFormData((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor({ [formData.name]: formData.hex });
    history.push("/colors");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type color name..."
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color hex value:</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={formData.hex}
          />
        </div>
        <button>Add Color!</button>
      </form>
    </div>
  );
};

export default ColorForm;
