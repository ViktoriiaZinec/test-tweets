import { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="All">All</option>
        <option value="Following">Following</option>
        <option value="Follow">Follow</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
