import React, { useState } from "react";

function Delivery01() {
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
        <option id="0" code="ALL">
          전체
        </option>
        <option id="1" code="CK">
          치킨
        </option>
        <option id="2" code="PZ">
          피자
        </option>
        <option id="3" code="SP">
          분식
        </option>
        <option id="4" code="CF">
          카페
        </option>
      </select>

      <select
        name="category"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option id="0">기본 정렬순</option>
        <option id="1">별점 높은순</option>
        <option id="2">리뷰 많은순</option>
      </select>
      <image path="">이미지</image>
      <p>가게 정보1행: 가게명, 광고여부</p>
      <p>가게 정보2행: 별점, 리뷰</p>
    </div>
  );
}

export default Delivery01;
