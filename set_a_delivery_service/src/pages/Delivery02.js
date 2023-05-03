import React, { useState } from "react";

function Delivery02() {
  const [category, setCategory] = useState("");

  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
  };

  return (
    <div>
      <h1 className="header1">마곡 요기서 배달: 화면1 제목</h1>
      <select
        name="category"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option id="0">Personal</option>
        <option id="1">Work</option>
      </select>

      <select
        name="category"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option id="0">Personal</option>
        <option id="1">Work</option>
      </select>
    </div>
  );
}

export default Delivery02;
